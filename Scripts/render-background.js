const comicCovers = [
  "https://i.pinimg.com/564x/ac/61/f3/ac61f37f954425249a035667a559c1fe.jpg",
  "https://i.pinimg.com/236x/78/f0/01/78f0017a116102ed918c6d45860948e6.jpg",
  "https://i.pinimg.com/236x/ce/4c/92/ce4c92b52a95387bec1f9d93b150bd96.jpg",
  "https://i.pinimg.com/236x/00/9e/a2/009ea2950b2d217cb38a2cdd74b18068.jpg",
  "https://i.pinimg.com/474x/f0/6b/de/f06bdeca8c31052b74db04b69bd23718.jpg",
  "https://i.pinimg.com/236x/57/6c/b1/576cb15d6a6ff250eb87d852ba095437.jpg",
  "https://i.pinimg.com/236x/03/ce/ac/03ceac19f1fa02b05c25ef89ca2af96b.jpg",
  "https://i.pinimg.com/474x/ac/09/bc/ac09bc84f17ea99ce7eeca991cd8aea0.jpg",
  "https://i.pinimg.com/236x/ad/24/0c/ad240c505f58bd379707c6bb9f556261.jpg",
  "https://i.pinimg.com/236x/bc/49/7f/bc497f0b1375ffc605a085e320054bbe.jpg",
  "https://i.pinimg.com/236x/a6/dc/2c/a6dc2caa5b3a2b9694732a9415936469.jpg",
  "https://i.pinimg.com/236x/73/fb/1a/73fb1a619bb6207d344013ac1e85ebe7.jpg",
  "https://i.pinimg.com/236x/34/93/75/34937510c38f18b77c487b4b25d52308.jpg",
  "https://i.pinimg.com/236x/00/9e/a2/009ea2950b2d217cb38a2cdd74b18068.jpg",
  "https://i.pinimg.com/236x/51/12/24/5112249af075e632f520f900951468e5.jpg",
  "https://i.pinimg.com/236x/f2/01/b8/f201b8fd0bb0476cd720a1e7ee37c9d4.jpg",
  "https://i.pinimg.com/236x/91/0f/f7/910ff7271745d2425ad9994756302436.jpg",
  "https://i.pinimg.com/236x/af/fd/8e/affd8eb2dfc43528666605c40a3e158f.jpg",
  "https://i.pinimg.com/236x/f3/41/34/f341340df1876f2540b7b4871815f9d2.jpg",
  "https://i.pinimg.com/236x/a7/23/59/a72359bce0dfb53b893f9bbd50efc655.jpg",
  "https://i.pinimg.com/236x/77/71/bf/7771bfb0f73f70b86c47365218ac3484.jpg",
  "https://i.pinimg.com/236x/8b/7e/51/8b7e51941394b188469856ff6d2c28dc.jpg",
  "https://i.pinimg.com/236x/24/92/c3/2492c3615960d26b7f95d2e659430e5d.jpg",
  "https://i.pinimg.com/236x/b8/65/f7/b865f7a8477c94630e08ab431a92752b.jpg",
  "https://i.pinimg.com/236x/43/b0/c7/43b0c74db33a391eae6ab2832bb2d414.jpg",
  "https://i.pinimg.com/236x/ed/d4/c1/edd4c1a752305f8f3bb9c2b34913728e.jpg",
  "https://i.pinimg.com/474x/55/ca/8b/55ca8bee087c88c9fe7ca1be996f92b1.jpg",
  "https://i.pinimg.com/474x/e6/4e/41/e64e41c4c145b58811e7ce8bb2a1d0fb.jpg",
  "https://i.pinimg.com/236x/00/53/18/0053185771e3378fe3a197818959975e.jpg",
  "https://i.pinimg.com/236x/0e/e3/2b/0ee32bdb7a557417c8d4d2bfffff28a1.jpg",
  "https://i.pinimg.com/236x/82/a7/38/82a7380b6af57f39685e02201df38351.jpg",
  "https://i.pinimg.com/236x/58/b1/a5/58b1a5b5668cbd8c0acf434803cb61a6.jpg",
  "https://i.pinimg.com/236x/fe/09/90/fe0990cbc63050d2634480f0e8f40143.jpg",
  "https://i.pinimg.com/236x/f8/4f/91/f84f91f43a9102688405ece5f16c5890.jpg",
  "https://i.pinimg.com/236x/59/51/25/5951250f789c5b363a3d8404bf71b6f5.jpg",
  "https://i.pinimg.com/236x/f0/9b/ee/f09bee12273da7b40eba7760efc85b57.jpg",
  "https://i.pinimg.com/236x/02/2e/94/022e948274f1642708777437ddcd730f.jpg",
  "https://i.pinimg.com/236x/ce/f7/41/cef74174912e04fa91ffb136bb79a5c4.jpg",
  "https://i.pinimg.com/474x/35/8d/08/358d08c2cb62e858ec4545682a3275a8.jpg",
  "https://i.pinimg.com/236x/98/65/e3/9865e32168f6991d590bff030a200c30.jpg",
  "https://i.pinimg.com/236x/16/d9/f9/16d9f945caa2c2dd01db99d2b1d518c7.jpg",
  "https://i.pinimg.com/236x/98/59/4e/98594e523c00e80653016bc174e0aa40.jpg",
  "https://i.pinimg.com/236x/46/63/f0/4663f063dc07a69c2177048d1691bfd9.jpg",
  "https://i.pinimg.com/236x/90/98/af/9098af8523d2a1713225cd8f560a4170.jpg",
  "https://i.pinimg.com/236x/d7/96/97/d796972dc53b182a542a7c4809bda601.jpg",
  "https://i.pinimg.com/236x/68/a2/21/68a2216324b13c4b6e64ed71b6373ab7.jpg",
  "https://i.pinimg.com/236x/bf/58/37/bf58379c0ca968615ffc8783111ec15f.jpg",
  "https://i.pinimg.com/236x/94/0e/c3/940ec3ccd23d24ab20613c0f806726be.jpg",
  "https://i.pinimg.com/236x/e4/11/20/e411203d28a4819174f83f152477e500.jpg",
  "https://i.pinimg.com/236x/86/b6/12/86b6129ec2889753c5c9f122edb78c4f.jpg",
  "https://i.pinimg.com/236x/c4/72/48/c4724872cd79f4d2057aeb8028e8a374.jpg",
  "https://i.pinimg.com/236x/08/d7/cb/08d7cba0a0950b30b12417cfc31750b5.jpg",
  "https://i.pinimg.com/236x/a1/f3/92/a1f39248a9d73cfda7454453a39bd2a5.jpg",
  "https://i.pinimg.com/474x/a4/10/01/a41001ec4da36bd0fb9fdfd735dc4313.jpg",
  "https://i.pinimg.com/236x/b9/9e/56/b99e56be2150750820c62c70b051b92c.jpg",
  "https://i.pinimg.com/236x/04/2d/f3/042df325253002804d679e01f61ee0b0.jpg",
  "https://i.pinimg.com/236x/3c/15/6c/3c156c1f5ad29d396222788643bc697e.jpg",
  "https://i.pinimg.com/236x/cb/6c/c3/cb6cc39fd479232cf2d5f99946876132.jpg",
  "https://i.pinimg.com/236x/c4/d4/ba/c4d4ba86f970299afcc3f5d9ce5edd03.jpg",
  "https://i.pinimg.com/236x/7b/77/ed/7b77edb52cb2dea3008288994a225564.jpg",
  "https://i.pinimg.com/236x/cb/6c/c3/cb6cc39fd479232cf2d5f99946876132.jpg",
  "https://i.pinimg.com/236x/f4/bc/b0/f4bcb0a1b7d312bcf9e1d77ef498577d.jpg",
];

class movingBandUp {
  constructor(images) {
    this.images = images;
    this.bandDiv = document.createElement("div");
    this.bandDiv.classList.add("band-div");
    document.querySelector("main").appendChild(this.bandDiv);
    this.band = document.createElement("div");
    this.band.classList.add("band");
    this.bandDiv.appendChild(this.band);
    this.bandLength = 0;
    this.firstImgIdx = 0;
    this.firstImgHeight = 0;
    this.lastImgIndex;
    this.renders = 0;
    this.populateBand();
  }

  populateImage(src, idx) {
    // console.log(`idx received: ${idx}`);
    const band = this.band;
    this.lastImgIndex = idx;
    // console.log(`this.lastImgIndex set to: ${idx}`);
    return new Promise((resolve, reject) => {
      const img = document.createElement("img");
      img.setAttribute("src", src);
      img.setAttribute("alt", "");
      img.style.width = "100%";
      img.style.marginTop = "8px";
      img.style.display = "block";
      img.onload = () => {
        band.appendChild(img);
        resolve(img);
      };
      img.onerror = () => reject();
    });
  }

  async populateBand() {
    // console.clear();
    const main = document.querySelector("body");
    const images = this.images;
    const band = this.band;
    band.innerHTML = "";
    const imagesLength = images.length;
    let i = 0;
    // populating 10 images in the band and keeping that number consistent in the following steps
    const promises = [];
    for (let index = 0; index < 10; index++) {
      const idx = index % imagesLength;
      promises.push(this.populateImage(images[idx], idx));
      //   const mainSectionHeight = getComputedStyle(main).height;
      //   const bandHeight = getComputedStyle(band).height;
      //   const firstImgHeight = getComputedStyle(band.firstChild).height;
      //   this.firstImgHeight = parseFloat(firstImgHeight);
      //   console.dir({ mainSectionHeight, bandHeight, firstImgHeight });
    }
    Promise.all(promises).then(() => {
      setTimeout(() => {
        this.firstImgHeight = parseFloat(
          getComputedStyle(band.firstChild).height
        );
      });
      setTimeout(() => {
        this.slideBand();
      }, 2000);
    });
    // for (const img of document.querySelectorAll(".band img")) {
    //   console.log(getComputedStyle(img).height);
    // }
    // console.log("----------------Animation starts now-----------------");
  }

  async slideBand() {
    console.log("---------------------------------------");
    this.renders++;
    if (this.renders < 0) {
      return;
    }
    const band = this.band;
    const firstImgHeight = Math.round(this.firstImgHeight * 100) / 100 + 8;
    console.log(`firstImgHeight: ${firstImgHeight}`);
    const images = this.images;
    // find height of first image & calculate the slide speed accordingly
    // speed ~ 40px/sec
    // time taken for first image to move up ~  firstImgWidth/10 seconds
    this.slideTime = firstImgHeight / 40;
    const slideTime = this.slideTime;
    // console.log(`slideTime: ${slideTime}`);

    setTimeout(() => {
      band.style.transition = `transform ${slideTime}s linear 0s`;
    });

    const transitionStyle = band.style.transition;
    // console.log(`transitionStyle: ${transitionStyle}`);

    setTimeout(() => {
      band.style.transform = `translateY(-${firstImgHeight}px)`;
    });

    const transformStyle = band.style.transform;
    // console.log(`transformStyle: ${transformStyle}`);

    // console.log(`this.lastImgIndex: ${this.lastImgIndex}`);
    const idx = (this.lastImgIndex + 1) % images.length;
    // console.log(`idx: ${idx}`);

    setTimeout(() => {
      band.firstChild.remove();
      this.firstImgHeight = parseFloat(
        getComputedStyle(band.firstChild).height
      );
      band.style.transform = `translateY(0)`;
      band.style.transition = `unset`;
      this.populateImage(images[idx], idx);
      this.slideBand();
    }, this.slideTime * 1000);
  }
  //   async animateSlide() {
  //     await this.populateBand();
  //     this.slideBand();
  //   }
}

class movingBandDown {
  constructor(images) {
    this.images = images;
    this.bandDiv = document.createElement("div");
    this.bandDiv.classList.add("band-div");
    this.bandDiv.style.position = "relative";
    document.querySelector("main").appendChild(this.bandDiv);
    this.band = document.createElement("div");
    this.band.classList.add("band");
    this.band.style.position = "absolute";
    this.band.style.bottom = "0%";
    this.bandDiv.appendChild(this.band);
    this.bandLength = 0;
    this.firstImgIdx = 0;
    this.firstImgHeight = 0;
    this.lastImgIndex;
    this.renders = 0;
    this.populateBand();
  }

  populateImage(src, idx) {
    // console.log(`idx received: ${idx}`);
    const band = this.band;
    this.lastImgIndex = idx;
    // console.log(`this.lastImgIndex set to: ${idx}`);
    return new Promise((resolve, reject) => {
      const img = document.createElement("img");
      img.setAttribute("src", src);
      img.setAttribute("alt", "");
      img.style.width = "100%";
      img.style.marginTop = "8px";
      img.style.display = "block";
      img.onload = () => {
        band.prepend(img);
        resolve(img);
      };
      img.onerror = () => reject();
    });
  }

  async populateBand() {
    // console.clear();
    const main = document.querySelector("body");
    const images = this.images;
    const band = this.band;
    band.innerHTML = "";
    const imagesLength = images.length;
    let i = 0;
    // populating 10 images in the band and keeping that number consistent in the following steps
    const promises = [];
    for (let index = 0; index < 10; index++) {
      const idx = index % imagesLength;
      promises.push(this.populateImage(images[idx], idx));
      //   await this.populateImage(images[idx], idx);
      //   const mainSectionHeight = getComputedStyle(main).height;
      //   const bandHeight = getComputedStyle(band).height;
      //   const lastImgHeight = getComputedStyle(band.lastChild).height;
      //   this.lastImgHeight = parseFloat(lastImgHeight);
      //   console.dir({ mainSectionHeight, bandHeight, firstImgHeight });
    }
    Promise.all(promises).then(() => {
      setTimeout(() => {
        console.log(this);
        this.lastImgHeight = parseFloat(
          getComputedStyle(band.lastChild).height
        );
      });
      setTimeout(() => {
        this.slideBand();
      }, 2000);
    });
    for (const img of document.querySelectorAll(".band img")) {
      console.log(getComputedStyle(img).height);
    }
    // console.log("----------------Animation starts now-----------------");
  }

  async slideBand() {
    console.log("---------------------------------------");
    this.renders++;
    if (this.renders < 0) {
      return;
    }
    const band = this.band;
    const lastImgHeight = Math.round(this.lastImgHeight * 100) / 100 + 8;
    console.log(`lastImgHeight: ${lastImgHeight}`);
    const images = this.images;
    // find height of first image & calculate the slide speed accordingly
    // speed ~ 40px/sec
    // time taken for first image to move up ~  firstImgWidth/10 seconds
    this.slideTime = lastImgHeight / 40;
    const slideTime = this.slideTime;
    // console.log(`slideTime: ${slideTime}`);

    setTimeout(() => {
      band.style.transition = `transform ${slideTime}s linear 0s`;
    });

    const transitionStyle = band.style.transition;
    // console.log(`transitionStyle: ${transitionStyle}`);

    setTimeout(() => {
      band.style.transform = `translateY(${lastImgHeight}px)`;
    });

    const transformStyle = band.style.transform;
    // console.log(`transformStyle: ${transformStyle}`);

    // console.log(`this.lastImgIndex: ${this.lastImgIndex}`);
    const idx = (this.lastImgIndex + 1) % images.length;
    // console.log(`idx: ${idx}`);

    setTimeout(() => {
      band.lastChild.remove();
      this.lastImgHeight = parseFloat(getComputedStyle(band.lastChild).height);
      band.style.transform = `translateY(0)`;
      band.style.transition = `unset`;
      this.populateImage(images[idx], idx);
      this.slideBand();
    }, this.slideTime * 1000);
  }
  //   async animateSlide() {
  //     this.slideBand();
  //   }
}

function generateDistinctIndex(n, range) {
  const resultSet = new Set();
  while (resultSet.size < n) {
    const idx = Math.floor(Math.random() * range);
    resultSet.add(idx);
  }
  return Array.from(resultSet).map((idx) => comicCovers[idx]);
}

export { movingBandUp, movingBandDown, comicCovers, generateDistinctIndex };
