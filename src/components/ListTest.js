import Grid from "@material-ui/core/Grid";
import Product from "./Products/Product";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function ListTest(props) {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 26;

  useEffect(() => {
    const getComments = async () => {
      var axios = require("axios");
      var data = {
        category: props.Category,
      };

      var config = {
        method: "post",
        url: `http://localhost/product/get_product_with_category_forpages`,
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response);
          const total = response.data.product.length;
          setpageCount(Math.ceil(total / limit));
        })
        .catch(function (error) {
          console.log(error);
        });
      // console.log(Math.ceil(total/12));
    };

    getComments();
  }, [props.Category]);

  useEffect(() => {
    const getComments = async () => {
      var axios = require("axios");
      var data = {
        category: props.Category,
        limit: limit,
      };

      var config = {
        method: "post",
        url: `http://localhost/product/get_product_with_category`,
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response);

          setItems(response.data.product);
        })
        .catch(function (error) {
          console.log(error);
        });
      // console.log(Math.ceil(total/12));
    };

    getComments();
  }, [props.Category]);

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    var axios = require("axios");
    var data = {
      category: props.Category,
      limit: limit,
      currentPage: currentPage,
    };
    var config = {
      method: "post",
      url: `http://localhost/product/get_pages_productes`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response);
        setItems(response.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="prdct">
      <Grid container justify="center" spacing={4}>
        {items.map((product) => (
          <Grid className="productgrid" item xs={12} sm={6} md={4} lg={3}>
            <Product
              name={product.name}
              price={product.price}
              img={product.img}
              id={product.id}
            />
          </Grid>
        ))}
      </Grid>
      <div className="paginationDiv">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
