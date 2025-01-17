﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Municip.io.Server.Data;
using Municip.io.Server.Models;

namespace Municip.io.Server.Controllers
{

    /// <summary>
    /// Este controlador é responsável por gerir o estado dos cidadãos.
    /// </summary>
    [ApiController]
    [Route("api/citizenstatus")]
    public class CitizenStatusController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        public CitizenStatusController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        //create a function to get all the citizens from a municipality as json. call it getCitizens
        /// <summary>
        /// Esta função retorna todos os cidadãos de um município. Recebe como parâmetro o nome do município.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("citizens")]
            public IActionResult getCitizens(string? name)
        {
            var citizens = _context.Citizens.Where(c => c.Municipality == name).ToList();
            return Json(citizens);
        }

        /// <summary>
        /// Esta função aprova um cidadão. Recebe como parâmetro o email do cidadão .
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("approveCitizen")]
        public async Task<IActionResult> approveCitizen(string? email)
        {
            var citizen = await _context.Citizens.FirstOrDefaultAsync(c => c.Email == email);
            if (citizen != null)
            {
                
                if(citizen.status == CitizenStatus.Blocked)
                {
                    SendUnblock(citizen.Email, citizen.firstName);
                }
                else
                {
                    SendAprove(citizen.Email, citizen.firstName);

                }
                citizen.status = CitizenStatus.Approved;
                await _context.SaveChangesAsync();

                return Json(_context.Citizens.Where(c => c.Municipality == citizen.Municipality).ToList());
            }
            return NotFound();
        }

        /// <summary>
        /// Esta função remove um cidadão. Recebe como parâmetro o email do cidadão .
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>

        [HttpPost("deleteCitizen")]
        public async Task<IActionResult> deleteCitizen(string? email)
        {
            var citizen = await _context.Citizens.FirstOrDefaultAsync(c => c.Email == email);
            if (citizen != null)
            {
                _context.Citizens.Remove(citizen);
                await _context.SaveChangesAsync();

                
                var user = await _userManager.FindByEmailAsync(email);
                if (user != null)
                {
                    await _userManager.DeleteAsync(user);
                }

                if (citizen.status == CitizenStatus.Pending)
                {
                    SendDeny(citizen.Email, citizen.firstName);
                 }
                else
                {
                    SendRemove(citizen.Email, citizen.firstName);
                }
                return Json(_context.Citizens.Where(c => c.Municipality == citizen.Municipality).ToList());
            }
            return NotFound();
        }

        /// <summary>
        /// Esta função bloqueia um cidadão. Recebe como parâmetro o email do cidadão .
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("blockCitizen")]
        public async Task<IActionResult> blockCitizen(string? email)
        {
            var citizen = await _context.Citizens.FirstOrDefaultAsync(c => c.Email == email);
            if (citizen != null)
            {
                citizen.status = CitizenStatus.Blocked;
                await _context.SaveChangesAsync();
                SendBlock(citizen.Email, citizen.firstName);
                return Json(_context.Citizens.Where(c => c.Municipality == citizen.Municipality).ToList());
            }
            return NotFound();
        }

        /// <summary>
        /// Esta função desbloqueia um cidadão. Recebe como parâmetro o email do cidadão .
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("pendingCitizen")]
        public async Task<IActionResult> pendingCitizen(string? email)
        {
            var citizen = await _context.Citizens.FirstOrDefaultAsync(c => c.Email == email);
            if (citizen != null)
            {
                citizen.status = CitizenStatus.Pending;
                await _context.SaveChangesAsync();
                return Json(_context.Citizens.ToList());
            }
            return NotFound();
        }


        /// <summary>
        /// Esta função envia um email de aprovação para um cidadão.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpPost("SendAprove")]
        public IActionResult SendAprove(string email,string name)
        {
            EmailSender.SendEmailAproveDeny(email, "Resultado de Inscrição", name, UserStatusMessage.Approve.toString(), "wwwroot/html/AproveEmail.html");
            return Ok("Success");
        }

        /// <summary>
        /// Esta função envia um email de reprovação para um cidadão.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="name"></param>
        /// <returns></returns>

        [HttpPost("SendDeny")]
        public IActionResult SendDeny(string email, string name)
        {
            EmailSender.SendEmailAproveDeny(email, "Resultado de Inscrição", name, UserStatusMessage.Deny.toString(), "wwwroot/html/DenyEmail.html");
            return Ok("Success");
        }

        /// <summary>
        /// Esta função envia um email de remoção para um cidadão.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpPost("SendRemove")]
        public IActionResult SendRemove(string email, string name)
        {
            EmailSender.SendEmailAproveDeny(email, "Remoção de conta", name, UserStatusMessage.Remove.toString(), "wwwroot/html/DenyEmail.html");
            return Ok("Success");
        }

        /// <summary>
        /// Esta função envia um email de bloqueio para um cidadão.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="name"></param>
        /// <returns></returns>

        [HttpPost("SendBlock")]
        public IActionResult SendBlock(string email, string name)
        {
            EmailSender.SendEmailAproveDeny(email, "Bloqueio de Conta", name, UserStatusMessage.Block.toString(), "wwwroot/html/DenyEmail.html");
            return Ok("Success");
        }

        /// <summary>
        /// Esta função envia um email de desbloqueio para um cidadão.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpPost("SendUnblock")]
        public IActionResult SendUnblock(string email, string name)
        {
            EmailSender.SendEmailAproveDeny(email, "Desbloqueio de Conta", name, UserStatusMessage.Unblock.toString(), "wwwroot/html/AproveEmail.html");
            return Ok("Success");
        }





    }
}
