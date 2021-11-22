using Microsoft.EntityFrameworkCore.Migrations;

namespace WebClient.Migrations
{
    public partial class InventoryItemImagefield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "InventoryItem",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "InventoryItem");
        }
    }
}
