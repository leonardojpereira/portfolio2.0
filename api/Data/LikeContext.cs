// Data/LikeContext.cs
using Microsoft.EntityFrameworkCore;
using Portfolio.Models;
using System.Collections.Generic;

namespace Portfolio.Data;

public class LikeContext : DbContext
{
    public LikeContext(DbContextOptions<LikeContext> options) : base(options) { }

    public DbSet<Like> Likes { get; set; }
}
