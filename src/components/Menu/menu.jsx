/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./menu.module.sass";
import Right from "./Right/right";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shopListActions from "../../redux/actions/shopListActions";

const Menu = ({
  reduxAddToShopListWithIndex,
  reduxDeleteFromShopListWithIndex,
  reduxResetShopList,
  shopList,
}) => {
  const [paymentInfo, setPaymentInfo] = useState({
    totalPrice: 0.0,
    payedWith: 250.0,
  });
  useEffect(() => {
    const totalPrice = shopList.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );

    setPaymentInfo({ ...paymentInfo, totalPrice: totalPrice.toFixed(2) });
  }, [shopList]);

  return (
    <div className={styles.menu}>
      {/* left */}
      <div className={styles.left}>
        <div class={styles.shopListContainer}>
          <div class={styles.shopList}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vitae urna malesuada, ultricies enim non, ullamcorper lacus. Nunc
            feugiat bibendum purus, dapibus fringilla elit volutpat sit amet.
            Quisque laoreet, augue vel pulvinar pharetra, nisi erat egestas
            mauris, vel efficitur massa massa ac nunc. Praesent pellentesque
            neque nec nunc dignissim mollis. Nam viverra neque vel aliquet
            volutpat. Nullam gravida nisi ut enim facilisis, mollis pellentesque
            urna consequat. Pellentesque a orci non nulla facilisis imperdiet.
            Praesent auctor ligula sit amet orci dignissim vulputate. Sed
            elementum turpis et nunc vulputate, eget bibendum nisl suscipit.
            Nullam vitae lectus at enim posuere fermentum. Quisque semper
            imperdiet leo, at condimentum metus sollicitudin eget. Etiam luctus
            felis sed diam finibus venenatis. Sed faucibus ex non nisl euismod
            ornare. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Duis suscipit tincidunt quam ut
            sagittis. Nulla velit turpis, viverra at velit vel, lacinia bibendum
            nunc. Aenean id sapien scelerisque, venenatis tortor et, porta nisi.
            Vivamus convallis suscipit nulla vel vestibulum. Integer sit amet
            venenatis turpis. Proin facilisis finibus velit, non viverra lacus
            aliquet ut. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque at pulvinar arcu, condimentum ultrices ex.
            Duis tristique eget lacus nec eleifend. Integer porta elit at turpis
            convallis ultrices eget nec enim. Sed eu felis a sem imperdiet
            ultrices sed eget tortor. Quisque ac vestibulum eros. Nulla
            tincidunt eget turpis sed cursus. Nunc et lorem fringilla, aliquet
            diam eget, vulputate neque. Vivamus feugiat, ante et semper aliquam,
            mi diam interdum velit, non mattis magna ligula quis ligula. Nullam
            dapibus mattis mattis. Nullam justo lectus, pellentesque ut est id,
            ultrices luctus erat. Ut viverra vestibulum ante vitae dignissim.
            Mauris non tortor semper, efficitur nisi nec, cursus odio. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nunc eu ultrices quam, at consectetur purus. Nam
            consectetur ante in ullamcorper dapibus. Aliquam efficitur ac tortor
            eu sagittis. Morbi et enim quis mauris scelerisque efficitur ac
            pharetra sem. Nulla porta ipsum quis condimentum dictum. Proin
            auctor porttitor commodo. Pellentesque ut justo augue. Nullam a
            aliquet eros, in imperdiet eros. Integer aliquam aliquam nibh vitae
            cursus. Duis id rutrum erat.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam vitae urna malesuada, ultricies enim non,
            ullamcorper lacus. Nunc feugiat bibendum purus, dapibus fringilla
            elit volutpat sit amet. Quisque laoreet, augue vel pulvinar
            pharetra, nisi erat egestas mauris, vel efficitur massa massa ac
            nunc. Praesent pellentesque neque nec nunc dignissim mollis. Nam
            viverra neque vel aliquet volutpat. Nullam gravida nisi ut enim
            facilisis, mollis pellentesque urna consequat. Pellentesque a orci
            non nulla facilisis imperdiet. Praesent auctor ligula sit amet orci
            dignissim vulputate. Sed elementum turpis et nunc vulputate, eget
            bibendum nisl suscipit. Nullam vitae lectus at enim posuere
            fermentum. Quisque semper imperdiet leo, at condimentum metus
            sollicitudin eget. Etiam luctus felis sed diam finibus venenatis.
            Sed faucibus ex non nisl euismod ornare. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis suscipit tincidunt quam ut sagittis. Nulla velit turpis,
            viverra at velit vel, lacinia bibendum nunc. Aenean id sapien
            scelerisque, venenatis tortor et, porta nisi. Vivamus convallis
            suscipit nulla vel vestibulum. Integer sit amet venenatis turpis.
            Proin facilisis finibus velit, non viverra lacus aliquet ut.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque at pulvinar arcu, condimentum ultrices ex. Duis
            tristique eget lacus nec eleifend. Integer porta elit at turpis
            convallis ultrices eget nec enim. Sed eu felis a sem imperdiet
            ultrices sed eget tortor. Quisque ac vestibulum eros. Nulla
            tincidunt eget turpis sed cursus. Nunc et lorem fringilla, aliquet
            diam eget, vulputate neque. Vivamus feugiat, ante et semper aliquam,
            mi diam interdum velit, non mattis magna ligula quis ligula. Nullam
            dapibus mattis mattis. Nullam justo lectus, pellentesque ut est id,
            ultrices luctus erat. Ut viverra vestibulum ante vitae dignissim.
            Mauris non tortor semper, efficitur nisi nec, cursus odio. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nunc eu ultrices quam, at consectetur purus. Nam
            consectetur ante in ullamcorper dapibus. Aliquam efficitur ac tortor
            eu sagittis. Morbi et enim quis mauris scelerisque efficitur ac
            pharetra sem. Nulla porta ipsum quis condimentum dictum. Proin
            auctor porttitor commodo. Pellentesque ut justo augue. Nullam a
            aliquet eros, in imperdiet eros. Integer aliquam aliquam nibh vitae
            cursus. Duis id rutrum erat.
          </div>
          <div class={styles.reservedSpace}></div>
        </div>
        <div class={styles.shopInfo}>
          Paga: {paymentInfo.payedWith}
          <br />
          Cambio: {paymentInfo.payedWith - paymentInfo.totalPrice >=0? (paymentInfo.payedWith - paymentInfo.totalPrice).toFixed(2):"0"}
          <br />
          Total:{paymentInfo.totalPrice}
        </div>
      </div>
      {/* end left */}
      <Right reduxResetShopList={reduxResetShopList} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCatalogueCategory: state.selectedCatalogueCategory,
    shopList: state.shopList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxAddToShopListWithIndex: bindActionCreators(
      shopListActions.addToShopListWithIndex,
      dispatch
    ),
    reduxDeleteFromShopListWithIndex: bindActionCreators(
      shopListActions.deleteFromShopListWithIndex,
      dispatch
    ),
    reduxResetShopList: bindActionCreators(
      shopListActions.resetShopList,
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
