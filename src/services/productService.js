import axios from "../axios";

const productService = {
  async getAllProductByCategoryName({
    categoryName = "",
    sortBy = "name",
    order = "asc",
    minPrice = 0,
    maxPrice = Infinity,
    trademark = [],
  }) {
    try {
      const res = await axios.get("/api/product", {
        params: {
          categoryName,
          sortBy,
          order,
          minPrice,
          maxPrice,
          trademark,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getAllProduct() {
    try {
      const res = await axios.get("/api/product/get-all");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getProductByName({ nameProduct }) {
    try {
      const res = await axios.get("/api/product/get-by-name", {
        params: {
          nameProduct,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async createProduct(formData) {
    try {
      const res = await axios.post("/api/product", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateProduct(productId, formData) {
    try {
      const res = await axios.put(`/api/product/${productId}`, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProduct(productId) {
    try {
      const res = await axios.delete(`/api/product/${productId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productService;
