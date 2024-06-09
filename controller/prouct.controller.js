const Product=require('../modules/prouct.module')

//get products
const getProducts = async (req, res) => {
  try {
    let product = await Product.find({});
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ mes: e.mes });
  }
};

//get single product
const getSingleProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ mes: e.mes });
  }
};

//create products
const postProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body);
    req.status(200).json(product);
  } catch (e) {
    res.status(500).json({ mes: e.mes });
  }
};

//update the products
const putProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json("something went wrong");
    }
    let update = await Product.findById(id);
    res.status(200).json(update);
  } catch (e) {
    res.status(500).json({ mes: e.mes });
  }
};

//delete the products
const deleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id, req.body);

    if (!product) {
      return res.status(404).json("something went wrong");
    }
    let deleted = await Product.findById(id);
    res.status(200).json(deleted);
  } catch (e) {
    res.status(500).json({ mes: e.mes });
  }
};

module.exports={getProducts,getSingleProduct,postProduct,putProduct,deleteProduct}