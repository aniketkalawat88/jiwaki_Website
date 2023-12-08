import React from "react";
// import { ProductDetailDummy } from "../Pages/DummyData";

function ProductDetailData({ color = "orange" }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="mx-16 p-5">
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Key benifits
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Direction for use
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Safety information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Other information
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Introducing new & improved Mamaearth Onion Conditioner for
                    even stronger, smoother, and shinier hair. It’s time to
                    welcome healthier hair with the time-tested goodness of
                    Onion. Onion, rich in Sulphur, potassium & antioxidants,
                    reduces hair fall & accelerates hair growth. Coconut has
                    nourishing properties and it penetrates deep into the
                    follicles to promote hair growth & scalp health. The natural
                    goodness of Sweet Almond Oil nourishes and strengthens the
                    hair and is optimal for controlling hair fall.And because of
                    our no toxins and no harmful chemicals philosophy, you won’t
                    find any Silicones, Parabens, mineral oil & dyes in
                    Mamaearth Onion Hair Conditione Due to the rise of
                    toxin-free beauty care products in recent times, people are
                    now switching to using rice water for skin whitening. This
                    trend is a huge comeback as a simple and safe solution for
                    various skin care issues. Skin enthusiasts too are going
                    gaga over this inexpensive and easy-to-use beauty hack for
                    an improved skin texture and blemish-free appearance. But
                    what is rice water and how is it beneficial for the skin-
                    here’s a blog post explaining some of the basics.
                  </p>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Mamaearth Onion Hair Conditione Due to the rise of
                    toxin-free beauty care products in recent times, people are
                    now switching to using rice water for skin whitening. This
                    trend is a huge comeback as a simple and safe solution for
                    various skin care issues. Skin enthusiasts too are going
                    gaga over this inexpensive and easy-to-use beauty hack for
                    an improved skin texture and blemish-free appearance. But
                    what is rice water and how is it beneficial for the skin-
                    here’s a blog post explaining some of the basics.
                    Introducing new & improved Mamaearth Onion Conditioner for
                    even stronger, smoother, and shinier hair. It’s time to
                    welcome healthier hair with the time-tested goodness of
                    Onion. Onion, rich in Sulphur, potassium & antioxidants,
                    reduces hair fall & accelerates hair growth. Coconut has
                    nourishing properties and it penetrates deep into the
                    follicles to promote hair growth & scalp health. The natural
                    goodness of Sweet Almond Oil nourishes and strengthens the
                    hair and is optimal for controlling hair fall.And because of
                    our no toxins and no harmful chemicals philosophy, you won’t
                    find any Silicones, Parabens, mineral oil & dyes in
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    even stronger, smoother, and shinier hair. It’s time to
                    welcome healthier hair with the time-tested goodness of
                    Onion. Onion, rich in Sulphur, potassium & antioxidants,
                    reduces hair fall & accelerates hair growth. Coconut has
                    nourishing properties and it penetrates deep into the
                    follicles to promote hair growth & scalp health. The natural
                    goodness of Sweet Almond Oil nourishes and strengthens the
                    hair and is optimal for controlling hair fall.And because of
                    Introducing new & improved Mamaearth Onion Conditioner for
                    our no toxins and no harmful chemicals philosophy, you won’t
                    toxin-free beauty care products in recent times, people are
                    now switching to using rice water for skin whitening. This
                    trend is a huge comeback as a simple and safe solution for
                    find any Silicones, Parabens, mineral oil & dyes in
                    Mamaearth Onion Hair Conditione Due to the rise of various
                    skin care issues. Skin enthusiasts too are going gaga over
                    this inexpensive and easy-to-use beauty hack for an improved
                    skin texture and blemish-free appearance. But what is rice
                    water and how is it beneficial for the skin- here’s a blog
                    post explaining some of the basics.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    Introducing new & improved Mamaearth Onion Conditioner for
                    even stronger, smoother, and shinier hair. It’s time to
                    welcome healthier hair with the time-tested goodness of
                    Onion. Onion, rich in Sulphur, potassium & antioxidants,
                    goodness of Sweet Almond Oil nourishes and strengthens the
                    hair and is optimal for controlling hair fall.And because of
                    our no toxins and no harmful chemicals philosophy, you won’t
                    find any Silicones, Parabens, mineral oil & dyes in
                    Mamaearth Onion Hair Conditione Due to the rise of reduces
                    hair fall & accelerates hair growth. Coconut has follicles
                    to promote hair growth & scalp health. The natural
                    toxin-free beauty care products in recent times, people are
                    various skin care issues. Skin enthusiasts too are going
                    gaga over this inexpensive and easy-to-use beauty hack for
                    an improved skin texture and blemish-free appearance. But
                    what is rice water and how is it beneficial for the skin-
                    now switching to using rice water for skin whitening. This
                    trend is a huge comeback as a simple and safe solution for
                    nourishing properties and it penetrates deep into the here’s
                    a blog post explaining some of the basics.
                  </p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    Introducing new & improved Mamaearth Onion Conditioner for
                    even stronger, smoother, and shinier hair. It’s time to
                    Mamaearth Onion Hair Conditione Due to the rise of
                    toxin-free beauty care products in recent times, people are
                    now switching to using rice water for skin whitening. This
                    welcome healthier hair with the time-tested goodness of
                    Onion. Onion, rich in Sulphur, potassium & antioxidants,
                    reduces hair fall & accelerates hair growth. Coconut has
                    nourishing properties and it penetrates deep into the
                    follicles to promote hair growth & scalp health. The natural
                    goodness of Sweet Almond Oil nourishes and strengthens the
                    hair and is optimal for controlling hair fall.And because of
                    our no toxins and no harmful chemicals philosophy, you won’t
                    find any Silicones, Parabens, mineral oil & dyes in trend is
                    a huge comeback as a simple and safe solution for various
                    skin care issues. Skin enthusiasts too are going gaga over
                    this inexpensive and easy-to-use beauty hack for an improved
                    skin texture and blemish-free appearance. But what is rice
                    water and how is it beneficial for the skin- here’s a blog
                    post explaining some of the basics.
                  </p>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailData;
