AFRAME.registerComponent('car', {
    schema: {
      movex: { type: 'number', default: 1 },
      rotationX: { type: 'number', default: 0 },
      rotationY: { type: 'number', default: 20 },
      rotationZ: { type: 'number', default: 0 }
    },
    update: function() {
      window.addEventListener('click', e => {
        this.el.setAttribute('rotation', {
          x: this.data.rotationX,
          y: this.data.rotationY + 20,
          z: this.data.rotationZ
        });
      });
    },
    tick: function() {
      if (this.data.clickCounter > 1) {
        this.data.movex += 0.05;
        this.el.setAttribute('position', {
          x: this.data.movex,
          y: this.el.getAttribute('position').y,
          z: this.el.getAttribute('position').z
        });
      }
    }
  });
  