import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUser, deleteUser } from "./UserReducer";

function CreateProduct() {
  const productNameRegex = /^[a-zA-Z\s-]+$/;
  const categoryRegex = /^(Apple|Samsung|Google)$/;
  const ProductFreshnessRegex = /^(Brand-New|Second-Hank|Refurbished)$/;
  const priceRegex = /^[0-9]+$/;

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  const [inputdata, SetInputdata] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    ImageFile: null,
    ImageUrl: "",
    additionalDescription: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasi input dengan regex
    const isValidProductName = productNameRegex.test(inputdata.productName);
    const isValidCategory = categoryRegex.test(inputdata.productCategory);
    const isValidFreshness = ProductFreshnessRegex.test(
      inputdata.productFreshness
    );
    const isValidPrice = priceRegex.test(inputdata.productPrice);
    // Perbarui pesan validasi
    setValidationMessages({
      productName: isValidProductName ? "" : "Product name harus diisi.",
      productCategory: isValidCategory ? "" : "Product Category harus diisi.",
      productFreshness: isValidFreshness
        ? ""
        : "Product Freshness harus diisi.",
      productPrice: isValidPrice ? "" : "Product Price harus diisi.",
      image: inputdata.ImageFile ? "" : "Mohon masukkan gambar.",
    });
    if (
      isValidProductName &&
      isValidCategory &&
      isValidFreshness &&
      isValidPrice &&
      inputdata.ImageFile
    ) {
      // Tambahkan produk ke state jika validasi berhasil
      dispatch(
        addUser({
          id: uuidv4(),
          productName: inputdata.productName,
          productCategory: inputdata.productCategory,
          productFreshness: inputdata.productFreshness,
          productPrice: inputdata.productPrice,
          ImagePath: inputdata.ImageUrl ? inputdata.ImageUrl : "No Image",
          additionalDescription: inputdata.additionalDescription,
        })
      );

      navigate("/createproduct");
    }
  };

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        SetInputdata({
          ...inputdata,
          ImageFile: file,
          ImageUrl: reader.result,
        });
      };
    } else {
      setInputdata({
        ...inputdata,
        ImageFile: null,
        ImageUrl: "",
      });
    }
  }
  return (
    <>
      <div className="text-start justify-content-start container">
        <h1 className="text-center">Create Product</h1>
        <form onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control "
              value={inputdata.productName}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productName: e.target.value })
              }
            />
            {validationMessages.productName && (
              <p style={{ color: "red" }}>{validationMessages.productName}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Product Category</label>
            <select
              name="productCategory"
              id="Category"
              className="form-control "
              value={inputdata.productCategory}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productCategory: e.target.value })
              }
            >
              <option value="">Choose..</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Google">Google</option>
            </select>
            {validationMessages.productCategory && (
              <p style={{ color: "red" }}>
                {validationMessages.productCategory}
              </p>
            )}
          </div>
          <div className="file">
            <label htmlFor="">Image</label>
            <input
              className="form-control form-control-color bg-light text-primary w-50"
              type="file"
              name="image"
              accept=".jpg, .png, .gif"
              id="formFile"
              onChange={handleImageChange}
            />
            {validationMessages.image && (
              <p style={{ color: "red" }}>{validationMessages.image}</p>
            )}
          </div>
          <div>
            <p className="mb-0">Product Freshness</p>
            <input
              type="radio"
              id="Freshness-Brand-New"
              name="productFreshness"
              value="Brand-New"
              checked={inputdata.productFreshness === "Brand-New"}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productFreshness: e.target.value })
              }
            />
            <label htmlFor="Freshness-Brand-New">Brand New</label>
            <br />
            <input
              type="radio"
              id="Freshness-Second-Hank"
              name="productFreshness"
              value="Second-Hank"
              checked={inputdata.productFreshness === "Second-Hank"}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productFreshness: e.target.value })
              }
            />
            <label htmlFor="Freshness-Second-Hank">Second Hank</label>
            <br />
            <input
              type="radio"
              id="Freshness-Refurbished"
              name="productFreshness"
              value="Refurbished"
              checked={inputdata.productFreshness === "Refurbished"}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productFreshness: e.target.value })
              }
            />
            <label htmlFor="Freshness-Refurbished">Refurbished</label>
            {validationMessages.productFreshness && (
              <p style={{ color: "red" }}>
                {validationMessages.productFreshness}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="">Additional Description</label> <br />
            <textarea
              className=""
              name=""
              id="textarea"
              cols={70}
              rows={5}
              defaultValue={""}
              onChange={(e) =>
                SetInputdata({
                  ...inputdata,
                  additionalDescription: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">Product Price</label>
            <br />
            <input
              className="rounded border-1"
              type="number"
              id="Price"
              placeholder="$ 1"
              name="productPrice"
              value={inputdata.productPrice}
              onChange={(e) =>
                SetInputdata({ ...inputdata, productPrice: e.target.value })
              }
            />
            {validationMessages.productPrice && (
              <p style={{ color: "red" }}>{validationMessages.productPrice}</p>
            )}
          </div>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
        {/* Table */}
        <h1 className="text-center">List Product</h1>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Image</th>
              <th>Additional Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.productName}</td>
                <td>{user.productCategory}</td>
                <td>{user.productFreshness}</td>
                <td>{user.productPrice}</td>
                <td>
                  {user.ImagePath === "No Image" ? (
                    user.ImagePath
                  ) : (
                    <img
                      src={user.ImagePath}
                      alt="Product Image"
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </td>
                <td>{user.additionalDescription}</td>
                <td>
                  <Link to={"/edit/${user.id}"}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </Link>
                </td>
                <td>
                  <Link onClick={() => handleDelete(user.id)}>
                    <button className="btn btn-sm btn-danger ms-2">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CreateProduct;
