import React from 'react'
import { Link } from 'react-router-dom'
// 目前會顯示很多prettier warnings，暫時無視
// Link 路由還沒寫的精準
function DetailContent() {
  return (
    <>
      <main className="product-detail-main">
        {/*  */}
        <div className="container">
          {/*  */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb px-0 d-none d-lg-flex py-4">
              <li className="breadcrumb-item">
                <Link to="/">首頁</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/product">商品</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                商品詳細
              </li>
            </ol>
          </nav>
          <section className="main-content-top">
            <div className="row justify-content-between mb-5">
              <div
                className="photo-display col-12 col-lg-5 mb-5 mb-lg-0"
                style={{ height: '1000px', overflowY: 'hidden' }}
              >
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-1.jpg"
                  alt={''}
                ></img>
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-2.jpg"
                  alt={''}
                ></img>
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-3.jpg"
                  alt={''}
                ></img>
              </div>
              <div
                className="detail-display col-12 col-lg-5 mb-5 mb-lg-0"
                style={{ height: '1000px', overflowY: 'hidden' }}
              >
                <div>
                  <h2 className="font-weight-bold">HONEST DELIVERY</h2>
                  <h3>Better Fast Hoodie</h3>
                  <h3 className="font-weight-bold" style={{ color: '#f37022' }}>
                    $999
                  </h3>
                  <p className="font-weight-bold mb-2">產地及材質</p>
                  <p className="m-0" style={{ fontSize: '14px' }}>
                    產地：美國
                  </p>
                  <p className="m-0" style={{ fontSize: '14px' }}>
                    主布：棉60%、聚酯纖維40%
                  </p>
                  <p className="m-0" style={{ fontSize: '14px' }}>
                    羅紋：棉82%、聚酯纖維18%
                  </p>
                </div>
                <hr style={{ backgroundColor: 'black' }}></hr>
                <div>
                  <p className="mb-2 font-weight-bold">COLOR</p>
                  <div className="color-choose mb-2">
                    <a href="#!">
                      <img
                        src="images/素材/icon/Clothes color_B.svg"
                        alt={''}
                      ></img>
                    </a>
                    <a href="#!">
                      <img
                        src="images/素材/icon/Clothes color_Blue.svg"
                        alt={''}
                      ></img>
                    </a>
                    <a href="#!">
                      <img
                        src="images/素材/icon/Clothes color_R.svg"
                        alt={''}
                      ></img>
                    </a>
                    <a href="#!">
                      <img
                        src="images/素材/icon/Clothes color_W.svg"
                        alt={''}
                      ></img>
                    </a>
                    <a href="#!">
                      <img
                        src="images/素材/icon/Clothes color_Y.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <p className="mb-2 font-weight-bold">SIZE</p>
                  <div className="size-choose mb-2">
                    <a
                      href="#!"
                      className="d-inline-block text-center text-decoration-none mr-2"
                    >
                      S
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block text-center text-decoration-none mx-2"
                    >
                      M
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block text-center text-decoration-none mx-2"
                    >
                      L
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block text-center text-decoration-none mx-2"
                    >
                      XL
                    </a>
                  </div>
                  <p className="mb-2 font-weight-bold">AMOUNT</p>
                  <div className="amount-choose mb-3 d-flex justify-content-start align-items-center">
                    <a
                      href="#!"
                      className="text-decoration-none d-inline-block font-weight-bold mr-3"
                      style={{ fontSize: '28px', color: '#353c1d' }}
                    >
                      +
                    </a>
                    <input type="number" className="text-center"></input>
                    <a
                      href="#!"
                      className="text-decoration-none d-inline-block font-weight-bold ml-3"
                      style={{ fontSize: '28px', color: '#353c1d' }}
                    >
                      -
                    </a>
                  </div>
                  <div className="add-to-cart-btn mb-4">
                    <a
                      href="#!"
                      className="d-inline-block py-2 px-5 text-decoration-none"
                    >
                      加入購物車
                    </a>
                  </div>
                  <div className="other-function d-flex">
                    <div>
                      <a
                        href="#!"
                        className="d-flex align-items-center px-1 mr-3 text-decoration-none"
                      >
                        <img
                          className="mr-2"
                          src="images/素材/icon/star_orange.svg"
                          alt={''}
                          width="25px"
                        ></img>
                        <span>收藏</span>
                        <img
                          className="ml-2"
                          src="images/素材/icon/Right arrow_G.svg"
                          alt={''}
                        ></img>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="d-flex align-items-center px-1 mx-3 text-decoration-none"
                      >
                        <img
                          className="mr-2"
                          src="images/素材/icon/Feed_G.svg"
                          width="25px"
                          alt={''}
                        ></img>
                        <span>尺寸表</span>
                        <img
                          className="ml-2"
                          src="images/素材/icon/Right arrow_G.svg"
                          alt={''}
                        ></img>
                      </a>
                      <div className="size-tryon-modal d-none">
                        <div className="size-tryon-content  p-5 position-relative">
                          <a
                            href="#!"
                            className="close-button position-absolute"
                          >
                            CLOSE
                            <span>X</span>
                          </a>
                          <h3 className="text-center font-weight-bold mb-4">
                            關於商品
                          </h3>
                          <div>
                            <div className="table-choose d-flex mb-4 justify-content-center justify-content-sm-start">
                              <a id="table-choose-size"
                                href="#!"
                                className="table-choose-size text-center d-block py-2 text-decoration-none active-table-choose"
                                onClick={()=>{document.getElementById('table-choose-size').classList.add('active-table-choose');
                                document.getElementById('table-choose-tryon').classList.remove('active-table-choose');
                                document.getElementById('size-table').classList.add('active-table');
                                document.getElementById('tryon-table').classList.remove('active-table');
                              }}
                              >
                                尺寸表
                              </a>
                              <a id="table-choose-tryon"
                                href="#!"
                                className="table-choose-tryon text-center tryon-table-choose d-block py-2 text-decoration-none"
                                onClick={()=>{document.getElementById('table-choose-tryon').classList.add('active-table-choose');
                                document.getElementById('table-choose-size').classList.remove('active-table-choose');
                                document.getElementById('tryon-table').classList.add('active-table');
                                document.getElementById('size-table').classList.remove('active-table');
                              }}
                              >
                                試穿表
                              </a>
                            </div>
                            <div id="size-table" className="size-table active-table">
                              <table className="table">
                                <tr>
                                  <th className="py-2 px-5 text-center">
                                    尺碼
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    肩寬
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    胸寬
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    袖長
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    衣長
                                  </th>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">S</td>
                                  <td className="py-1 text-center">38</td>
                                  <td className="py-1 text-center">47.5</td>
                                  <td className="py-1 text-center">59.5</td>
                                  <td className="py-1 text-center">57</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">M</td>
                                  <td className="py-1 text-center">39.5</td>
                                  <td className="py-1 text-center">50</td>
                                  <td className="py-1 text-center">60.5</td>
                                  <td className="py-1 text-center">59</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">L</td>
                                  <td className="py-1 text-center">41</td>
                                  <td className="py-1 text-center">53</td>
                                  <td className="py-1 text-center">61.5</td>
                                  <td className="py-1 text-center">61</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">XL</td>
                                  <td className="py-1 text-center">42.5</td>
                                  <td className="py-1 text-center">56</td>
                                  <td className="py-1 text-center">62.5</td>
                                  <td className="py-1 text-center">63</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">XXL</td>
                                  <td className="py-1 text-center">44</td>
                                  <td className="py-1 text-center">59</td>
                                  <td className="py-1 text-center">62.5</td>
                                  <td className="py-1 text-center">64</td>
                                </tr>
                              </table>
                              <p>
                                ※
                                本尺寸表會因商品素材不同，可能與實際尺寸略有誤差。
                              </p>
                              <p>※ 尺寸皆以公分(cm)為單位。</p>
                              <div className="d-flex justify-content-center">
                                <img
                                  className="w-75"
                                  src="images/商品/尺寸衣服.png"
                                  alt=""
                                ></img>
                              </div>
                            </div>
                            <div id="tryon-table" className="tryon-table">
                              <table className="table">
                                <tr>
                                  <th className="py-2 px-5 text-center">
                                    試穿人員
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    身高(cm)
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    體重(kg)
                                  </th>
                                  <th className="py-2 px-5 text-center">
                                    適合尺碼
                                  </th>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">A</td>
                                  <td className="py-1 text-center">148</td>
                                  <td className="py-1 text-center">48</td>
                                  <td className="py-1 text-center">S</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">B</td>
                                  <td className="py-1 text-center">148</td>
                                  <td className="py-1 text-center">48</td>
                                  <td className="py-1 text-center">S</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">C</td>
                                  <td className="py-1 text-center">148</td>
                                  <td className="py-1 text-center">48</td>
                                  <td className="py-1 text-center">S</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">D</td>
                                  <td className="py-1 text-center">148</td>
                                  <td className="py-1 text-center">48</td>
                                  <td className="py-1 text-center">S</td>
                                </tr>
                                <tr>
                                  <td className="py-1 text-center">E</td>
                                  <td className="py-1 text-center">148</td>
                                  <td className="py-1 text-center">48</td>
                                  <td className="py-1 text-center">S</td>
                                </tr>
                              </table>
                              <p>
                                ※
                                身高體重與尺寸無絕對關係，建議依個人穿著習慣及身形選購。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="d-flex align-items-center px-1 mx-3 text-decoration-none"
                      >
                        <img
                          className="mr-2"
                          src="images/素材/icon/Comment_G.svg"
                          width="25px"
                          alt={''}
                        ></img>
                        <span>評論</span>
                        <img
                          className="ml-2"
                          src="images/素材/icon/Right arrow_G.svg"
                          alt={''}
                        ></img>
                      </a>

                      <div className="review-modal d-none">
                        <div className="review-content py-5 px-3 px-md-5 position-relative">
                          <a
                            href="#!"
                            className="close-button position-absolute"
                          >
                            CLOSE
                            <span>X</span>
                          </a>
                          <h3 className="text-center font-weight-bold mb-4">
                            評論
                          </h3>
                          <div>
                            <div className="mb-4">
                              <form action="" className="position-relative">
                                <textarea
                                  name=""
                                  id=""
                                  style={{ resize: 'none', height: '100px' }}
                                  className="px-3 py-2 w-100"
                                ></textarea>
                                <div
                                  className=" d-flex w-100  justify-content-end mt-1"
                                >
                                  <a
                                    href="#!"
                                    className="review-btn d-inline-block text-decoration-none py-2 px-4 mx-2 rounded"
                                    
                                  >
                                    清除
                                  </a>
                                  <a
                                    href="#!"
                                    className="review-btn d-inline-block text-decoration-none py-2 px-4 ml-2 rounded"
                                  >
                                    送出
                                  </a>
                                </div>
                              </form>
                            </div>
                            <div>
                              <ul
                                className="list-unstyled w-100"
                                style={{ height: '300px', overflowY: 'scroll' }}
                              >
                                <li style={{ width: '98%' }}>
                                  <div className="row py-3">
                                    <div className="col-2 d-none d-lg-flex justify-content-center align-items-start">
                                      <div className="px-3">
                                        <img
                                          src="images/素材/會員等級icon/award.svg"
                                          className="img-fluid"
                                          alt={''}
                                        ></img>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-10">
                                      <div
                                        style={{
                                          borderBottom: '1px solid #353c1d',
                                        }}
                                      >
                                        <div>
                                          <p
                                            style={{
                                              fontSize: '14px',
                                              fontWeight: '900',
                                            }}
                                          >
                                            會員編號
                                            <span>0020******</span>
                                            <span>(尊貴會員)</span>
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-weight-bold">
                                            167/49
                                            穿起來剛剛好，不會到非常寬鬆，顏色還不錯看穿起來剛剛好，
                                            不會到非常寬鬆，顏色還不錯看!167/49
                                            穿起來剛剛好，不會到非常寬
                                            鬆，顏色還不錯看
                                          </p>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                          <div>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                          </div>
                                          <div className="align-self-end">
                                            <p
                                              className="m-0 font-weight-bold"
                                              style={{ fontSize: '12px' }}
                                            >
                                              2020/12/15 00:00:00
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li style={{ width: '98%' }}>
                                  <div className="row py-3">
                                    <div className="col-2 d-none d-lg-flex justify-content-center align-items-start">
                                      <div className="px-3">
                                        <img
                                          src="images/素材/會員等級icon/award.svg"
                                          className="img-fluid"
                                          alt={''}
                                        ></img>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-10">
                                      <div
                                        style={{
                                          borderBottom: '1px solid #353c1d',
                                        }}
                                      >
                                        <div>
                                          <p
                                            style={{
                                              fontSize: '14px',
                                              fontWeight: '900',
                                            }}
                                          >
                                            會員編號
                                            <span>0020******</span>
                                            <span>(尊貴會員)</span>
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-weight-bold">
                                            167/49
                                            穿起來剛剛好，不會到非常寬鬆，顏色還不錯看穿起來剛剛好，
                                            不會到非常寬鬆，顏色還不錯看!167/49
                                            穿起來剛剛好，不會到非常寬
                                            鬆，顏色還不錯看
                                          </p>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                          <div>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                          </div>
                                          <div className="align-self-end">
                                            <p
                                              className="m-0 font-weight-bold"
                                              style={{ fontSize: '12px' }}
                                            >
                                              2020/12/15 00:00:00
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li style={{ width: '98%' }}>
                                  <div className="row py-3">
                                    <div className="col-2 d-none d-lg-flex justify-content-center align-items-start">
                                      <div className="px-3">
                                        <img
                                          src="images/素材/會員等級icon/award.svg"
                                          className="img-fluid"
                                          alt={''}
                                        ></img>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-10">
                                      <div
                                        style={{
                                          borderBottom: '1px solid #353c1d',
                                        }}
                                      >
                                        <div>
                                          <p
                                            style={{
                                              fontSize: '14px',
                                              fontWeight: '900',
                                            }}
                                          >
                                            會員編號
                                            <span> 0020 ******</span>
                                            <span>(尊貴會員)</span>
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-weight-bold">
                                            167/49
                                            穿起來剛剛好，不會到非常寬鬆，顏色還不錯看穿起來剛剛好，
                                            不會到非常寬鬆，顏色還不錯看!167/49
                                            穿起來剛剛好，不會到非常寬
                                            鬆，顏色還不錯看
                                          </p>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                          <div>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                          </div>
                                          <div className="align-self-end">
                                            <p
                                              className="m-0 font-weight-bold"
                                              style={{ fontSize: '12px' }}
                                            >
                                              2020/12/15 00:00:00
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li style={{ width: '98%' }}>
                                  <div className="row py-3">
                                    <div className="col-2 d-none d-lg-flex justify-content-center align-items-start">
                                      <div className="px-3">
                                        <img
                                          src="images/素材/會員等級icon/award.svg"
                                          className="img-fluid"
                                          alt={''}
                                        ></img>
                                      </div>
                                    </div>
                                    <div className="col-12 col-lg-10">
                                      <div
                                        style={{
                                          borderBottom: '1px solid #353c1d',
                                        }}
                                      >
                                        <div>
                                          <p
                                            style={{
                                              fontSize: '14px',
                                              fontWeight: '900',
                                            }}
                                          >
                                            會員編號
                                            <span>0020******</span>
                                            <span>(尊貴會員)</span>
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-weight-bold">
                                            167/49
                                            穿起來剛剛好，不會到非常寬鬆，顏色還不錯看穿起來剛剛好，
                                            不會到非常寬鬆，顏色還不錯看!167/49
                                            穿起來剛剛好，不會到非常寬
                                            鬆，顏色還不錯看
                                          </p>
                                        </div>
                                        <div className="mb-3 d-flex justify-content-between">
                                          <div>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                            <img
                                              src="images/商品/商品組圖(尚未依品牌分類)/1/z-70864313-1.jpg"
                                              alt={''}
                                              width="50px"
                                              style={{
                                                height: '50px',
                                                objectFit: 'cover',
                                              }}
                                              className="mr-3"
                                            ></img>
                                          </div>
                                          <div className="align-self-end">
                                            <p
                                              className="m-0 font-weight-bold"
                                              style={{ fontSize: '12px' }}
                                            >
                                              2020/12/15 00:00:00
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  */}
        </div>
        {/*  */}
        <div className=" careful-thing-title d-flex justify-content-center">
          <h2 className="d-inline-block py-3 m-0 text-center font-weight-bold">
            注意事項及洗滌方式
          </h2>
        </div>
        <div className="d-flex justify-content-center py-5">
          <div className="careful-thing-content d-inline-block">
            <p className="h4 font-weight-bold">
              ※ 因拍攝燈光效果可能造成色差，請以實品顏色為準。
            </p>
            <p className="h4 font-weight-bold">
              ※ 深淺色衣物請分開洗滌;請勿⻑時間浸泡、濕放，以防染色。
            </p>
            <p className="h4 font-weight-bold">
              ※ 衣物洗滌和保養方式請參考商品洗標。
            </p>
          </div>
        </div>
        <div className="horizon-line-sm position-relative mb-5 mx-auto"></div>
        <div className="container">
          <section className="main-content-middle-1">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-8.jpg"
                  alt={''}
                ></img>
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-6.jpg"
                  alt={''}
                ></img>
              </div>
              <div className="col-12 col-md-6">
                <div className="my-2">
                  <p className="text-center font-weight-bold">
                    衣服會隨著時代而改變，
                  </p>
                  <p className="text-center font-weight-bold">
                    將現在的潮流氛圍化身為剪裁。
                  </p>
                  <p className="text-center font-weight-bold">
                    營造出清爽俐落印象的衣服⻑度。
                  </p>
                  <p className="text-center font-weight-bold">
                    容易與其他單品搭配的顏色。
                  </p>
                  <p className="text-center font-weight-bold">
                    為了美感和易於使用，
                  </p>
                  <p className="text-center font-weight-bold">
                    在不易乾燥的連帽內側加入聚酯材質。
                  </p>
                  <p className="text-center font-weight-bold">
                    採用雙針縫製以追求平整度與柔滑的膚觸感。
                  </p>
                  <p className="text-center font-weight-bold">
                    所有的改變均有其意義。
                  </p>
                </div>
                <img
                  className="img-fluid my-2"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-7.jpg"
                  alt={''}
                ></img>
              </div>
            </div>
          </section>
        </div>
        <div className="horizon-line-sm position-relative my-4 mx-auto"></div>
        <div className="horizon-line-lg position-relative my-5 mx-auto text-center font-weight-bold h2">
          推薦搭配
        </div>
        <div className="container">
          <section className="main-content-middle2">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 pr-lg-5 mb-3 mb-lg-0">
                <img
                  className="img-fluid"
                  src="images/商品/商品組圖(尚未依品牌分類)/2/z-70864370-1.jpg"
                  alt={''}
                ></img>
              </div>
              <div className="col-12 col-lg-6 pl-lg-5">
                <div className="recommend-modal d-none justify-content-center align-items-center">
                  <div className="recommend-content p-5 position-relative">
                    <a
                      href="#!"
                      className="close-button position-absolute"
                    >
                      CLOSE
                      <span>X</span>
                    </a>
                    <h3 className="text-center font-weight-bold mb-4">
                      產品詳情
                    </h3>
                    <div className="row mb-4">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-4 d-flex flex-column justify-content-between">
                            <div className="mb-2">
                              <img
                                className="img-fluid"
                                style={{ height: '150px', objectFit: 'cover' }}
                                src="images/商品/商品組圖(尚未依品牌分類)/9/z-70864304_32-1.jpg"
                                alt={''}
                              ></img>
                            </div>
                            <div className="mb-2">
                              <img
                                className="img-fluid"
                                style={{ height: '150px', objectFit: 'cover' }}
                                src="images/商品/商品組圖(尚未依品牌分類)/9/z-70864304_32-1.jpg"
                                alt={''}
                              ></img>
                            </div>
                            <div className="mb-2">
                              <img
                                className="img-fluid"
                                style={{ height: '150px', objectFit: 'cover' }}
                                src="images/商品/商品組圖(尚未依品牌分類)/9/z-70864304_32-1.jpg"
                                alt={''}
                              ></img>
                            </div>
                            <div className="">
                              <img
                                className="img-fluid"
                                style={{ height: '150px', objectFit: 'cover' }}
                                src="images/商品/商品組圖(尚未依品牌分類)/9/z-70864304_32-1.jpg"
                                alt={''}
                              ></img>
                            </div>
                          </div>
                          <div className="col-8">
                            <div className="w-100 h-100">
                              <img
                                className="h-100 w-100"
                                style={{ objectFit: 'cover' }}
                                src="images/商品/商品組圖(尚未依品牌分類)/9/z-70864304-10.jpg"
                                alt={''}
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div>
                          <h2 className="font-weight-bold">HONEST DELIVERY</h2>
                          <h3>Better Fast Hoodie</h3>
                          <h3
                            className="font-weight-bold"
                            style={{ color: '#f37022' }}
                          >
                            $999
                          </h3>
                          <p className="font-weight-bold mb-2">產地及材質</p>
                          <p className="m-0" style={{ fontSize: '14px' }}>
                            產地：美國
                          </p>
                          <p className="m-0" style={{ fontSize: '14px' }}>
                            主布：棉60%、聚酯纖維40%
                          </p>
                          <p className="m-0" style={{ fontSize: '14px' }}>
                            羅紋：棉82%、聚酯纖維18%
                          </p>
                        </div>
                        <hr style={{ backgroundColor: 'black' }}></hr>
                        <div>
                          <p className="mb-2 font-weight-bold">COLOR</p>
                          <div className="color-choose mb-2">
                            <a href="#!">
                              <img
                                src="images/素材/icon/Clothes color_B.svg"
                                alt={''}
                              ></img>
                            </a>
                            <a href="#!">
                              <img
                                src="images/素材/icon/Clothes color_Blue.svg"
                                alt={''}
                              ></img>
                            </a>
                            <a href="#!">
                              <img
                                src="images/素材/icon/Clothes color_R.svg"
                                alt={''}
                              ></img>
                            </a>
                            <a href="#!">
                              <img
                                src="images/素材/icon/Clothes color_W.svg"
                                alt={''}
                              ></img>
                            </a>
                            <a href="#!">
                              <img
                                src="images/素材/icon/Clothes color_Y.svg"
                                alt={''}
                              ></img>
                            </a>
                          </div>
                          <p className="mb-2 font-weight-bold">SIZE</p>
                          <div className="size-choose mb-2">
                            <a
                              href="#!"
                              className="d-inline-block text-center text-decoration-none mr-2"
                            >
                              S
                            </a>
                            <a
                              href="#!"
                              className="d-inline-block text-center text-decoration-none mx-2"
                            >
                              M
                            </a>
                            <a
                              href="#!"
                              className="d-inline-block text-center text-decoration-none mx-2"
                            >
                              L
                            </a>
                            <a
                              href="#!"
                              className="d-inline-block text-center text-decoration-none mx-2"
                            >
                              XL
                            </a>
                          </div>
                          <p className="mb-2 font-weight-bold">AMOUNT</p>
                          <div className="amount-choose mb-3 d-flex justify-content-start align-items-center">
                            <a
                              href="#!"
                              className="text-decoration-none d-inline-block font-weight-bold mr-3"
                              style={{ fontSize: '28px', color: '#353c1d' }}
                            >
                              +
                            </a>
                            <input type="number" class="text-center"></input>
                            <a
                              href="#!"
                              className="text-decoration-none d-inline-block font-weight-bold ml-3"
                              style={{ fontSize: '28px', color: '#353c1d' }}
                            >
                              -
                            </a>
                          </div>
                          <div className="add-to-cart-btn mb-4">
                            <a
                              href="#!"
                              class="d-inline-block py-2 px-5 text-decoration-none"
                            >
                              加入購物車
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex justify-content-center py-3"
                      style={{ backgroundColor: 'rgba(53, 60, 29, 0.2)' }}
                    >
                      <a
                        href="#!"
                        className="see-all-btn d-inline-block font-weight-bold text-decoration-none py-2 px-5"
                      >
                        查看全部商品
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                  <div className="col-6 col-lg-5 mb-3">
                    <a
                      href="#!"
                      className=" d-flex align-items-center justify-content-between"
                    >
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                        style={{ transform: 'rotate(180deg)' }}
                      ></img>
                      <img
                        className="img-fluid"
                        src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                        alt={''}
                      ></img>
                      <img
                        className="d-none d-lg-inline-block"
                        src="images/素材/icon/Right arrow_G.svg"
                        alt={''}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="horizon-line-sm position-relative my-5 mx-auto text-center h2">
          <span
            className="font-weight-bold position-relative"
            style={{ top: '-16px' }}
          >
            瀏覽紀錄
          </span>
        </div>
        <div className="container">
          <section className="main-content-bottom">
            <div className="browse-history mt-5 d-flex justify-content-between" style={{marginBottom:'100px'}}>
              <a
                href="#!"
                className="d-inline-block p-3 mr-2"
                style={{ width: '180px' }}
              >
                <img
                  src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                  className="img-fluid mb-3"
                  alt={''}
                ></img>
                <p className="font-weight-bold mb-2">Adidas</p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  小包包
                </p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  價格：NT$1,000
                </p>
              </a>
              <a
                href="#!"
                className="d-inline-block p-3 mx-2"
                style={{ width: '180px' }}
              >
                <img
                  src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                  className="img-fluid mb-3"
                  alt={''}
                ></img>
                <p className="font-weight-bold mb-2">Adidas</p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  小包包
                </p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  價格：NT$1,000
                </p>
              </a>
              <a
                href="#!"
                className="d-inline-block p-3 mx-2"
                style={{ width: '180px' }}
              >
                <img
                  src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                  className="img-fluid mb-3"
                  alt={''}
                ></img>
                <p className="font-weight-bold mb-2">Adidas</p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  小包包
                </p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  價格：NT$1,000
                </p>
              </a>
              <a
                href="#!"
                className="d-inline-block p-3 mx-2"
                style={{ width: '180px' }}
              >
                <img
                  src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                  className="img-fluid mb-3"
                  alt={''}
                ></img>
                <p className="font-weight-bold mb-2">Adidas</p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  小包包
                </p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  價格：NT$1,000
                </p>
              </a>
              <a
                href="#!"
                className="d-inline-block p-3 ml-2"
                style={{ width: '180px' }}
              >
                <img
                  src="images/商品/商品組圖(尚未依品牌分類)/4/z-70864367-1.jpg"
                  className="img-fluid mb-3"
                  alt={''}
                ></img>
                <p className="font-weight-bold mb-2">Adidas</p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  小包包
                </p>
                <p
                  className=" mb-2"
                  style={{ letterSpacing: '0.1rem', fontSize: '14px' }}
                >
                  價格：NT$1,000
                </p>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default DetailContent
