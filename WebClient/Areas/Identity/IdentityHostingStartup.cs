using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebClient.Areas.Identity.Data;

[assembly: HostingStartup(typeof(WebClient.Areas.Identity.IdentityHostingStartup))]
namespace WebClient.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WebClientIdentityDbContext>(options =>
                    options.UseSqlite("Data Source=test.db", b => b.MigrationsAssembly("WebClient")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WebClientIdentityDbContext>();
            });
        }
    }
}