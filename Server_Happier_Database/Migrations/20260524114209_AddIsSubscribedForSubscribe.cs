using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server_Happier_Database.Migrations
{
    /// <inheritdoc />
    public partial class AddIsSubscribedForSubscribe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsSubscribed",
                table: "Subscribers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSubscribed",
                table: "Subscribers");
        }
    }
}
