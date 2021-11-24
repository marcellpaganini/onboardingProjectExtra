using Microsoft.EntityFrameworkCore.Migrations;

namespace WebClient.Migrations
{
    public partial class OrderItemBuyPricePerUnit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BuyPrice",
                table: "OrderItem",
                newName: "BuyPricePerUnit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BuyPricePerUnit",
                table: "OrderItem",
                newName: "BuyPrice");
        }
    }
}
