import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faHome,
  faListAlt,
  faBarcode,
  faSuitcase,
  faEnvelope,
  faBell,
  faUserCircle,
  faCaretDown,
  faCog,
  faUser,
  faFileAlt,
  faPowerOff,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="wrap">
          <aside className="main-aside">
            <div className="logo-wrap">
              <a href="#!">
                <img src="./images/dashboard/logo_w.svg" alt={''} />
              </a>
            </div>
            <ul className="menu-ul google-font">
              <li className="menu-li">
                <a className="menu-a">
                  <i>
                    <FontAwesomeIcon icon={faHome} />
                  </i>
                  總覽
                </a>
              </li>
              <li className="menu-li" id="menuLi">
                <a
                  className="menu-a"
                  data-num="1"
                  id="menuu"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul1')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faListAlt} />
                  </i>
                  {/* <i className="far faListAlt"></i> */}
                  訂單列表
                  {/* <i>
                   
                  </i>  */}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul className="menu-inner-ul" data-num="1" id="menu-inner-ul1">
                  <li>
                    <a href="#!">無未結案訂單</a>
                  </li>
                  <li>
                    <a href="#!">訂單報表匯出</a>
                  </li>
                </ul>
              </li>
              <li className="menu-li">
                <a
                  className="menu-a"
                  data-num="2"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul2')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faChartBar} />
                  </i>
                  營運分析
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul id="menu-inner-ul2" className="menu-inner-ul" data-num="2">
                  <li>
                    <a href="#!">基本報表</a>
                  </li>
                  <li>
                    <a href="#!">商品圖表</a>
                  </li>
                  <li>
                    <a href="#!">營收分析</a>
                  </li>
                  <li>
                    <a href="#!">訂單分析</a>
                  </li>
                  <li>
                    <a href="#!">會員分析</a>
                  </li>
                  <li>
                    <a href="#!">商品分析</a>
                  </li>
                  <li>
                    <a href="#!">行銷活動分析</a>
                  </li>
                </ul>
              </li>
              <li className="menu-li">
                <a
                  className="menu-a"
                  data-num="3"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul3')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                  {/* <i className="fas fa-users"></i> */}
                  會員管理
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul id="menu-inner-ul3" className="menu-inner-ul" data-num="3">
                  <li>
                    <a href="#!">顧客列表</a>
                  </li>
                  <li>
                    <a href="#!">回饋建議</a>
                  </li>
                  <li>
                    <a href="#!">鑽石會員</a>
                  </li>
                  <li>
                    <a href="#!">顧客匯入</a>
                  </li>
                </ul>
              </li>
              <li className="menu-li">
                <a
                  className="menu-a"
                  data-num="4"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul4')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  {/* <i className="fas faBarcode"></i> */}
                  <i>
                    <FontAwesomeIcon icon={faBarcode} />
                  </i>
                  商品管理
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul className="menu-inner-ul" data-num="4" id="menu-inner-ul4">
                  <li>
                    <a href="#!">新增商品</a>
                  </li>
                  <li>
                    <a href="#!">商品管理</a>
                  </li>
                  <li>
                    <a href="#!">庫存列表</a>
                  </li>
                  <li>
                    <a href="#!">試算表匯入</a>
                  </li>
                </ul>
              </li>
              <li className="menu-li">
                <a
                  className="menu-a"
                  data-num="4"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul5')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  {/* <i className="fas faSuitcase"></i> */}
                  <i>
                    <FontAwesomeIcon icon={faSuitcase} />
                  </i>
                  商品群組
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul className="menu-inner-ul" data-num="4" id="menu-inner-ul5">
                  <li>
                    <a href="#!">商品分類</a>
                  </li>
                  <li>
                    <a href="#!">條件分類</a>
                  </li>
                  <li>
                    <a href="#!">任選折扣群組</a>
                  </li>
                  <li>
                    <a href="#!">訂單加價購設定</a>
                  </li>
                  <li>
                    <a href="#!">滿額贈品</a>
                  </li>
                  <li>
                    <a href="#!">後臺群組排序</a>
                  </li>
                </ul>
              </li>
              <li className="menu-li">
                <a
                  className="menu-a"
                  data-num="4"
                  onClick={() => {
                    document
                      .getElementById('menu-inner-ul6')
                      .classList.toggle('active-inner-ul')
                  }}
                >
                  {/* <i className="fas faEnvelope"></i> */}
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  客服問答
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: 'auto' }}
                  ></FontAwesomeIcon>
                </a>
                <ul className="menu-inner-ul" data-num="4" id="menu-inner-ul6">
                  <li>
                    <a href="#!">問題分類</a>
                  </li>
                  <li>
                    <a href="#!">問題管理</a>
                  </li>
                  <li>
                    <a href="#!">依訂單分類</a>
                  </li>
                  <li>
                    <a href="#!">依會員分類</a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
          <main className="main-main">
            <nav className="main-nav">
              <ul className="main-nav-ul">
                <li
                  className="main-nav-ul-li"
                  style={{ marginLeft: 'auto', marginRight: '40px' }}
                >
                  <a className="nav-a" href="#!">
                    {/* <i className="fas faBell"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faBell} />
                    </i>

                    <span className="bell-badge google-font">1</span>
                  </a>
                </li>
                <li className="main-nav-ul-li" style={{ marginRight: '40px' }}>
                  <a className="nav-a" href="#!">
                    {/* <i className="fas fa-home"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faHome} />
                    </i>
                  </a>
                </li>
                <li className="main-nav-ul-li" style={{ marginRight: '40px' }}>
                  <a className="nav-a" style={{ cursor: 'default' }}>
                    <i className="far faUserCircle"></i>
                    {/* <i className="fas fa-home"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faUserCircle} />
                    </i>

                    <span
                      className="google-font"
                      style={{
                        color: 'white',
                        paddingLeft: '10px',
                        position: 'relative',
                        top: '-3px',
                      }}
                    >
                      Hello User
                    </span>
                  </a>
                </li>
                <li
                  className="setting-li main-nav-ul-li"
                  style={{ marginRight: '40px' }}
                >
                  <a
                    className="nav-a setting-li-a"
                    onClick={() => {
                      document
                        .getElementById('nav-ul1')
                        .classList.toggle('active-inner-ul')
                    }}
                  >
                    {/* <i className="fas faCog"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faCog} />
                    </i>

                    {/* <i className="fas faCaretDown"></i> */}
                    <i>
                      <FontAwesomeIcon icon={faCaretDown} />
                    </i>
                  </a>
                  <ul className="setting-inner-ul google-font" id="nav-ul1">
                    <li>
                      <a href="#!">
                        {/* <i className="far faUser"></i> */}
                        <i>
                          <FontAwesomeIcon icon={faUser} />
                        </i>

                        <span className="setting-word">帳號</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        {/* <i className="fas faFileAlt"></i> */}
                        <i>
                          <FontAwesomeIcon icon={faFileAlt} />
                        </i>

                        <span className="setting-word">文件</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        {/* <i className="fas faPowerOff"></i> */}
                        <i>
                          <FontAwesomeIcon icon={faPowerOff} />
                        </i>

                        <span className="setting-word">登出</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="main-content">
              <nav className="breadcrumb-nav">
                <ol className="breadcrumb google-font">
                  <li className="">
                    <a href="#!" className="breadcrumb-actived">
                      營運分析
                    </a>
                  </li>
                  <span className="breadcrumb-split ">/</span>
                  <li>
                    <a href="#!" className="breadcrumb-disabled">
                      基本報表
                    </a>
                  </li>
                </ol>
              </nav>
              <p>
                此行為測試排版 Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam mollitia modi earum ducimus aliquid
                ratione numquam autem adipisci consequatur doloribus molestiae
                ipsam fugit voluptates accusamus, illo, omnis, dolorem ab? Sequi
                repellendus molestiae non. Repellendus exercitationem, quibusdam
                magnam ex similique non dicta enim eaque rerum sequi eum itaque
                suscipit, assumenda voluptatem? Repellat reprehenderit, corporis
                velit eligendi commodi optio neque libero, reiciendis
                exercitationem enim recusandae architecto facere esse iure ea
                necessitatibus earum, hic sapiente! Pariatur, tenetur dolorem!
                Ab suscipit recusandae repellat quidem nemo aut obcaecati
                ratione, non laudantium maxime provident, cumque mollitia
                cupiditate, modi voluptatum vitae corporis quos accusantium
                dicta cum quo blanditiis voluptates inventore. Molestias atque
                perferendis, libero numquam deleniti saepe cum error odio quos
                consequatur voluptatem modi facilis architecto minima
                dignissimos, vitae dolorem ratione? Quos ipsum quisquam
                corporis, corrupti ex cum sint rerum quod quaerat! Nam tenetur
                quis hic, repellendus architecto dolores odit dicta veniam
                labore aliquam. Eos error sequi, nulla quas rerum quaerat
                excepturi consequuntur beatae tenetur dolor iusto unde earum
                similique porro corrupti ad sint in. Corrupti totam,
                necessitatibus quaerat saepe aliquam vero perspiciatis, culpa
                quidem aspernatur fugit, labore ducimus corporis explicabo
                dolorum! Eum laboriosam eius maxime magnam odio perferendis,
                atque maiores consectetur ipsa debitis optio! Distinctio vitae
                iure ea dolorum provident illo cumque incidunt. Maiores, ut
                pariatur esse rem asperiores, ex quo dicta cumque non nemo
                nulla? Reprehenderit expedita consectetur odit necessitatibus
                illum quasi fuga non, dolor aliquid incidunt, optio alias magni
                quia aut eos, a aspernatur! Odio nam ducimus ad laboriosam neque
                quam. Harum cupiditate voluptatum eveniet minima cum assumenda
                ad, optio nostrum. Et, soluta sed explicabo impedit minus,
                commodi nostrum consequatur voluptatibus atque dolores
                reprehenderit illum, odio voluptates aperiam numquam?
                Voluptates, veniam eaque cum maiores, quibusdam non distinctio
                alias temporibus consequatur quam ipsum a accusantium eveniet
                nam excepturi sapiente ut? Fugit officiis sapiente debitis
                nostrum, repudiandae ratione. Consectetur adipisci sapiente
                accusantium maxime, omnis sequi eius! Repudiandae at ex nam
                ipsum! Laborum, iste eos. Minima id, itaque omnis odit provident
                aut inventore voluptatem magni blanditiis sapiente mollitia
                tempora in perferendis ipsum facilis accusamus asperiores cum
                modi aperiam et ut officia non? Sapiente fugit nam nihil
                consequuntur. Ipsam cumque reiciendis fugit laborum id
                architecto odit voluptatibus qui, similique consectetur
                assumenda doloribus quam soluta odio molestiae pariatur
                temporibus ratione corporis modi ex nisi ut esse numquam.
                Provident, repellendus sed corporis iure neque possimus odio
                sapiente dicta ipsam accusamus magnam perspiciatis cumque
                necessitatibus at, veniam libero ipsum ex error. Corporis
                voluptatem alias dicta, sint velit maiores tenetur ipsam
                architecto praesentium nihil doloremque ipsum? Iste provident
                eius iusto ipsum modi repellendus autem ex ipsa aut rerum natus
                tempore, dignissimos praesentium totam illum error illo minima
                ullam temporibus ad ea omnis? Tenetur iure, beatae cumque
                dolorem exercitationem sit? Iusto error, provident nostrum
                impedit veniam suscipit vel aliquid inventore, cum quas
                doloribus laboriosam? Sit accusamus nemo vero? Dolor itaque
                possimus dicta, earum aspernatur ea magni laboriosam numquam
                voluptatem porro maiores optio, a, amet iste reprehenderit
                perferendis temporibus! Aliquid a voluptate veniam, minima
                similique expedita nam natus corrupti labore tenetur. Delectus
                exercitationem expedita ea facilis deserunt maiores sequi.
                Labore iusto, tempore numquam corrupti ab aut quasi ex pariatur
                amet quia vel voluptatibus nihil beatae nulla quibusdam magni
                harum asperiores inventore similique obcaecati expedita
                voluptatum ipsum exercitationem. Modi sed suscipit laboriosam at
                doloremque harum perspiciatis nemo beatae, obcaecati recusandae
                illo delectus facere placeat voluptate possimus! Corrupti,
                maxime saepe voluptatum autem facilis sint asperiores numquam
                suscipit. Earum, eos et excepturi voluptas sed eligendi, a dolor
                eius illum voluptatibus perferendis deleniti, omnis repellendus
                molestiae expedita. Dolorum minima nemo molestiae unde, ducimus
                ratione praesentium odio eos at deserunt repellendus ad alias
                repudiandae dolore, corporis ullam repellat sed facere dolores
                dicta? Et animi doloremque facere! Assumenda, error alias porro
                quidem dicta sunt repudiandae similique veritatis nulla quaerat,
                nobis nisi optio enim inventore deleniti culpa obcaecati fuga.
                Voluptate rem corporis quaerat fugiat optio sit unde accusamus
                delectus fuga enim, placeat dolorem labore nulla recusandae
                veniam doloremque animi dicta iure dignissimos neque iusto porro
                nobis expedita quis. Architecto voluptas earum eligendi ipsum
                autem adipisci fuga eos? Laboriosam hic incidunt obcaecati.
                Doloribus quasi, exercitationem illum, velit perspiciatis
                quisquam dignissimos assumenda ratione at provident voluptas
                vero harum adipisci, repellendus temporibus rem vel omnis cumque
                soluta minus corrupti iusto? Omnis beatae labore impedit
                adipisci, eligendi, quisquam neque ducimus et quis illum ipsam
                veritatis voluptates? Et, ut? Est, reprehenderit! Molestiae
                dolorum iure veritatis deleniti ab dolorem cumque et deserunt
                est, excepturi soluta labore. Dignissimos placeat ea blanditiis
                iure quae molestiae fuga non pariatur excepturi facilis odit
                aperiam est, veniam temporibus nam vel ducimus quidem nemo
                perferendis nihil soluta natus voluptates molestias. Deleniti
                minima vitae, nisi labore doloremque iure nam porro nostrum
                optio nihil quos eligendi praesentium vel asperiores quas,
                beatae non voluptates repellat! Harum cum voluptate, saepe
                impedit quod tempora. Necessitatibus voluptas numquam iusto.
                Rerum cum optio quaerat, architecto fugiat cumque? Nostrum
                beatae ipsum, consequatur aperiam voluptate voluptatibus sed
                fugiat! Laborum deleniti quaerat, ullam earum unde nobis
                expedita culpa dolor? Officiis distinctio corporis quis sapiente
                quo nesciunt reiciendis possimus officia, necessitatibus
                obcaecati sed eos perferendis excepturi blanditiis fugiat autem
                cum libero est inventore fuga. Sed facilis nemo accusantium hic
                necessitatibus ut deleniti itaque, excepturi nam asperiores.
                Excepturi, aspernatur ea! Accusantium tempora quaerat inventore
                amet ut ad laboriosam! Porro, excepturi mollitia temporibus
                aspernatur repellendus fugit provident minus, enim blanditiis
                sequi obcaecati aliquam nemo quaerat nobis sed accusantium
                eligendi ipsum. Officiis provident eveniet, ipsam corporis
                obcaecati quidem mollitia ea, voluptatibus quas praesentium
                accusantium sequi fugit saepe odio rem hic incidunt quos,
                aperiam voluptate minima distinctio adipisci eligendi
                reprehenderit perspiciatis. Mollitia asperiores atque
                perspiciatis veritatis porro esse iure qui commodi amet, dolor
                beatae vero modi, fuga vel praesentium consequatur placeat id
                provident adipisci laboriosam corporis? Cupiditate quam voluptas
                voluptatibus architecto dolores distinctio velit, est
                perferendis repellat accusantium delectus maxime harum
                temporibus rerum optio voluptatum maiores perspiciatis voluptate
                tempora omnis fugiat praesentium sit sint. Neque vero, nesciunt
                hic repellendus voluptates consequuntur perspiciatis ea
                voluptatem delectus architecto, amet molestias. Numquam impedit
                neque quaerat. Id tempora, vero dolores neque soluta porro
                blanditiis atque. Consequuntur a, itaque optio quibusdam fugiat
                libero? 此行為測試排版
              </p>

              {/* <!-- 內容打在下面 --> */}

              {/* <!-- 內容打在上面 --> */}
            </div>
            <footer className="main-footer google-font">
              <a className="go-top google-font">Top</a>
              <p>Copyright © 2020 Cool. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard
