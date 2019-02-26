import React from 'react';
import style from './writeReview.css';

function WriteReview() {
  return (
    <div className={style.writeReview}>
      <span className={style.reviewBox}>
        <span className={style.customHeader}>WRITE A REVIEW</span>
        Tell us what you think about this product. We value your feedback.
      </span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="https://www.uniqlo.com/us/en/submit-review/?bvproductid=409312&bvcontenttype=REVIEW_SUBMISSION&pid=409312&bvdisplaycode=5311&bvappcode=rr&bvauthenticateuser=false&bvpage=https%3A%2F%2Funiqloenus.ugc.bazaarvoice.com%2Fsubmit%2F5311%2F409312%2Fsubmitreview.htm%3Fauthsourcetype%3D__AUTHTYPE__%26campaignid%3DBV_RATING_SUMMARY%26format%3Dembedded%26innerreturn%3Dhttps%253A%252F%252Funiqloenus.ugc.bazaarvoice.com%252F5311%252F409312%252Freviews.djs%253Fformat%253Dembeddedhtml%26return%3Dhttps%253A%252F%252Fwww.uniqlo.com%252Fus%252Fen%252Fmen-blocktech-parka-409312.html%253Fdwvar_409312_color%253DCOL16%2526cgid%253Dmen-outerwear-and-blazers%2523start%253D1%2526cgid%253Dmen-outerwear-and-blazers%26sessionparams%3D__BVSESSIONPARAMS__%26user%3D__USERID__">WRITE A REVIEW</a>
    </div>
  );
}

export default WriteReview;
