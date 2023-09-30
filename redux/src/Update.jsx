import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  if (!existingUser) {
    console.log("User not found for ID:", id);
    return <div>User not found</div>;
  }
  const {
    productName,
    productCategory,
    productFreshness,
    productPrice,
    ImageFile,
    ImageUrl,
    additionalDescription,
  } = existingUser;
  const [inputdata, setInputdata] = useState({
    productName,
    productCategory,
    productFreshness,
    productPrice,
    ImageFile,
    ImageUrl,
    additionalDescription,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        productName: inputdata.productName,
        productCategory: inputdata.productCategory,
        productFreshness: inputdata.productFreshness,
        productPrice: inputdata.productPrice,
        ImageFile: inputdata.ImageFile,
        ImageUrl: inputdata.ImageUrl,
        additionalDescription: inputdata.additionalDescription,
      })
    );

    navigate("/createproduct");
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            name="productName"
            className="form-control "
            value={inputdata.productName}
            onChange={(e) =>
              setInputdata({ ...inputdata, productName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">Product Category</label>
          <select
            name="productCategory"
            id="Category"
            className="form-control "
            value={inputdata.productCategory}
            onChange={(e) =>
              setInputdata({ ...inputdata, productCategory: e.target.value })
            }
          >
            <option value="">Choose..</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
          </select>
        </div>
        <div className="file">
          <label htmlFor="">Image</label>
          <input
            className="form-control form-control-color bg-light text-primary w-50"
            type="file"
            name="image"
            accept=".jpg, .png, .gif"
            id="formFile"
            // onChange={handleImageChange}
          />
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
              setInputdata({ ...inputdata, productFreshness: e.target.value })
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
              setInputdata({ ...inputdata, productFreshness: e.target.value })
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
              setInputdata({ ...inputdata, productFreshness: e.target.value })
            }
          />
          <label htmlFor="Freshness-Refurbished">Refurbished</label>
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
              setInputdata({
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
              setInputdata({ ...inputdata, productPrice: e.target.value })
            }
          />
        </div>
        <br />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default Update;
