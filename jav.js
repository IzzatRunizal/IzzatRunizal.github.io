new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin,destination,dorection) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({delay: 0.6});
    tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

      if(destination.index ===1){
      const container1 = document.querySelector('.container1');
      const container2 = document.querySelector('.container2');


      tl.fromTo(container1, 1, {x: '-50%'}, {x: '-5%'});
      tl.fromTo(container2, 1, {x: '-100%'}, {x: '5%'});


        if(destination.index ===1){
          const container3 = document.querySelector('.container3');
          const container4 = document.querySelector('.container4');

          tl.fromTo(container3, 1, {x: '-50%'}, {x: '-5%'});
          tl.fromTo(container4, 1, {x: '-100%'}, {x: '5%'});

          if(destination.index ===1){
            const container5 = document.querySelector('.container5');
            const container6 = document.querySelector('.container6');

            tl.fromTo(container5, 1, {x: '-50%'}, {x: '-5%'});
            tl.fromTo(container6, 1, {x: '-100%'}, {x: '5%'});

          }
        }
    }
  }
});
