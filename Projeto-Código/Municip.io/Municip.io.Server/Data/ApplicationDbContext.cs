﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Municip.io.Server.Models;
using System.Reflection.Metadata;

namespace Municip.io.Server.Data
{

    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {

        public DbSet<DocumentTemplate> DocumentTemplates { get; set; }

        public DbSet<DocumentRequest> DocumentRequests { get; set; }
        public DbSet<Citizen> Citizens { get; set; }

        public DbSet<MunicipalAdministrator> MunicipalAdministrators { get; set; }

        public DbSet<Municipality> Municipalities { get; set; }

        public DbSet<Event> Events { get; set; }

        public DbSet<Book> Books { get; set; }
        public DbSet<AppFeature> AppFeatures { get; set; }



        public DbSet<BookRequest> BookRequests { get; set; }

        public DbSet<Browser> Browsers { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :
                base(options)
        { }

        public DbSet<News> News { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Citizen>()
                .HasMany(c => c.DocumentRequests)
                .WithOne(dr => dr.Citizen)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Citizen>()
                .HasMany(c => c.BookRequests)
                .WithOne(br => br.Citizen)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Citizen>()
                .HasMany(c => c.Browsers)
                .WithOne(b => b.Citizen)
                .OnDelete(DeleteBehavior.Cascade);




        }
    }



}
