class ProductDTO {
    constructor(product) {
      this.productId = product.product_id;
      this.name = product.name;
      this.category = product.category;
      this.supplierName = product.supplier_name;
      this.stockLevel = product.stock_level;
      this.reorderPoint = product.reorder_point;
      this.createdAt = product.created_at;
    }
  
    // Additional methods can be added if needed
    toJSON() {
      return {
        productId: this.productId,
        name: this.name,
        category: this.category,
        supplierName: this.supplierName,
        stockLevel: this.stockLevel,
        reorderPoint: this.reorderPoint,
        createdAt: this.createdAt,
      };
    }
  }
  
  module.exports = ProductDTO;
  