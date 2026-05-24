using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Server_Happier.Exceptions;
using Server_Happier_Database.Entities;

namespace Server_Happier.Middlewares
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }

            catch (BadRequestException e)
            {
                context.Response.StatusCode = 400;
                await context.Response.WriteAsync(e.Message);
            }

            catch (DbUpdateException ex)
            {
                if (ex.InnerException is SqlException sqlEx && sqlEx.Number == 2601)
                {
                    context.Response.StatusCode = 409;
                    await context.Response.WriteAsync("This email is already registered.");

                    return;
                }

                throw;
            }

            catch (Exception)
            {
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync("Unexpected server error. Try again later.");
            }
        }
    }
}
