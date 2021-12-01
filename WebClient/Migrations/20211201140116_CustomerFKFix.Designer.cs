﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OrderManagement.Data;

namespace WebClient.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20211201140116_CustomerFKFix")]
    partial class CustomerFKFix
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.9");

            modelBuilder.Entity("OrderManagement.Types.Inventory.InventoryItem", b =>
                {
                    b.Property<Guid?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Price")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("InventoryItem");
                });

            modelBuilder.Entity("OrderManagement.Types.Orders.Order", b =>
                {
                    b.Property<Guid?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("CustomerId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("Status")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("OrderManagement.Types.Orders.OrderItem", b =>
                {
                    b.Property<Guid?>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("BuyPricePerUnit")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("InventoryItemId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("OrderId")
                        .HasColumnType("TEXT");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<double>("Tax")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItem");
                });

            modelBuilder.Entity("OrderManagement.Types.Orders.OrderItem", b =>
                {
                    b.HasOne("OrderManagement.Types.Orders.Order", null)
                        .WithMany("Items")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("OrderManagement.Types.Orders.Order", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}