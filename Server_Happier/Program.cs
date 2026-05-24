using Microsoft.EntityFrameworkCore;
using Server_Happier.Helpers;
using Server_Happier.Interfaces;
using Server_Happier.Middlewares;
using Server_Happier.Repositories;
using Server_Happier.Services;
using Server_Happier.Validators;
using Server_Happier_Database;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<MyDbContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("MyDbConnectionString")));

builder.Services.AddScoped<ErrorHandlingMiddleware>();

builder.Services.AddAutoMapper(typeof(Program).Assembly);

builder.Services.AddScoped<INewsletterService, NewsletterService>();
builder.Services.AddScoped<INewsletterRepository, NewsletterRepository>();
builder.Services.AddScoped<ISubscribeValidator, SubscribeValidator>();
builder.Services.AddScoped<ITextNormalizer, TextNormalizer>();

var app = builder.Build();

app.UseMiddleware<ErrorHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
