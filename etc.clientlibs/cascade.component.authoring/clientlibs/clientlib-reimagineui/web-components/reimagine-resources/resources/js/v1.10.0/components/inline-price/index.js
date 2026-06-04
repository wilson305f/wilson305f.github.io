import{r as e,R as t,i,c as r,n as s,b as n,d as c}from "/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-reimagineui/web-components/reimagine-resources/resources/js/v1.10.0/ref.js";import{R as o}from "/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-reimagineui/web-components/reimagine-resources/resources/js/v1.10.0/secondary-nav-item.const.js";const a="product-title",l="sku-title",p="list-price",d="msrp-price",u="discount-price",h="tax-disclaimer",_="promo-price",m="var(--ds-app-color-base-default-fg-heading, #0E1726)",P="row",v="flex-end",f="var(--ds-app-space-micro-2xs, 0.25rem)",y=i`
  :host {
    display: var(--ds-inline-price-values-display, ${e("flex")});
    flex-direction: var(
      --ds-inline-price-values-flex-direction,
      ${e(P)}
    );
    align-items: var(
      --ds-inline-price-values-align-items,
      ${e(v)}
    );
    gap: var(--ds-inline-price-values-gap, ${e(f)});
    color: var(--ds-inline-price-values-color, ${e(m)});
    flex-wrap: wrap;
  }

  .promo ::slotted([slot='default']) {
    font-weight: var(
      --ds-inline-price-promo-font-weight,
      ${e(t.fontWeight)}
    );
  }

  .discount-price {
    text-decoration: line-through;
    color: var(--ds-inline-price-discount-price-color, var(--ds-comp-sku-text-strikethrough, #61615E));
  }
`;var k=Object.defineProperty,x=Object.getOwnPropertyDescriptor,g=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?x(t,i):t,c=e.length-1;c>=0;c--)(s=e[c])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&k(t,i,n),n};const T="reimagine-inline-price";let b=class extends o{constructor(){super(...arguments),this._inlinePrice={}}get inlinePrice(){return this._inlinePrice}set inlinePrice(e){const t=this._inlinePrice;if("string"==typeof e)try{this._inlinePrice=JSON.parse(e)}catch(e){console.error("Failed to parse inline price JSON:",e),this._inlinePrice={}}else this._inlinePrice=e??{};this._updateInternalState(),this.requestUpdate("inlinePrice",t)}firstUpdated(){super.firstUpdated(),this._updateInternalState()}updated(e){super.updated(e),e.has("inline-price")&&this._updateInternalState()}_updateInternalState(){if(this.inlinePrice&&0===Object.keys(this.inlinePrice).length)return;this._inlinePrice=this.inlinePrice??{};const{tokenType:e,productTitle:t,skuTitle:i,currentPrice:r,msrpPrice:s,discount:n,taxDisclaimer:c}=this._inlinePrice;this._tokenType=e??void 0,this._productTitle=t??void 0,this._skuTitle=i??void 0,this._currentPrice=r??void 0,this._msrpPrice=s??void 0,this._discount=n??void 0,this._taxDisclaimer=c??void 0}_setOrCreateSlottedSpan(e,t){if(!t)return;const i=this.querySelector(`[slot="${e}"]`);if(i)i.textContent=t;else{const i=document.createElement("span");i.setAttribute("slot",e),i.textContent=t,this.append(i)}}_renderDiscountPrice(){const e=!(this._tokenType===_||this._msrpPrice&&this._currentPrice);return e||this._setOrCreateSlottedSpan("discount-price",this._msrpPrice),n`
      <div
        part="discount-price"
        class="discount-price"
        style=${e?"display: none;":""}
      >
        <slot name="discount-price"></slot>
      </div>
    `}_renderDefaultText(){let e;switch(this._tokenType){case a:e=this._productTitle;break;case l:e=this._skuTitle;break;case p:case _:e=this._currentPrice;break;case d:e=this._msrpPrice;break;case u:e=this._discount;break;case h:e=this._taxDisclaimer;break;default:e=void 0}return this._setOrCreateSlottedSpan("default",e),n`
      <div
        part="default"
        class="default ${this._tokenType===_?"promo":""}"
        style=${e?"":"display: none;"}
      >
        <slot name="default"></slot>
      </div>
    `}render(){return n` ${this._renderDiscountPrice()} ${this._renderDefaultText()} `}};b.styles=[y],g([r()],b.prototype,"_inlinePrice",2),g([s({type:Object,attribute:"inline-price"})],b.prototype,"inlinePrice",1),g([r()],b.prototype,"_tokenType",2),g([r()],b.prototype,"_productTitle",2),g([r()],b.prototype,"_skuTitle",2),g([r()],b.prototype,"_currentPrice",2),g([r()],b.prototype,"_msrpPrice",2),g([r()],b.prototype,"_discount",2),g([r()],b.prototype,"_taxDisclaimer",2),b=g([c(T)],b);export{b as InlinePrice,T as name};
