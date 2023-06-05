class Slider {
  static transitionStyle = "translate 0.5s ease-in-out";
  static transitionTimeout = 500;
  constructor({ sliderContainer, controlContainer, labelContainer }) {
    this._sliderContainer = sliderContainer;
    this._controlContainer = controlContainer;
    this._labelContainer = labelContainer;
    this._rightButton = this._controlContainer.querySelector(
      ".slider__button[name=right]"
    );
    this._leftButton = this._controlContainer.querySelector(
      ".slider__button[name=left]"
    );
    this._currentItem = 1;
    this._totalItem = sliderContainer.children.length;
  }

  _baseInitiate() {
    this._setListeners();
    this._calculateLabel();
    this._sliderContainer.style.setProperty("--slides", this._totalItem);
  }

  initiate() {
    this._baseInitiate();
    this._checkControls();
  }

  _calculateLabel() {
    if (this._labelContainer) {
      this._labelContainer.textContent = `${this._currentItem}/${this._totalItem}`;
    }
  }

  _checkControls() {
    if (this._totalItem === 1) {
      this._disableAllControls();
    } else if (this._currentItem === 1) {
      this._disableControl(this._leftButton);
      this._enableControl(this._rightButton);
    } else if (this._currentItem === this._totalItem) {
      this._disableControl(this._rightButton);
      this._enableControl(this._leftButton);
    } else {
      this._enableAllControls();
    }
  }

  _setListeners() {
    this._leftButton.addEventListener("click", () => {
      this._leftCLick();
    });

    this._rightButton.addEventListener("click", () => {
      this._rightClick();
    });
  }

  _getStep() {
    return 100 / this._totalItem;
  }

  _getShift(position) {
    const shift = position ? position : this._currentItem;
    return -1 * (shift - 1) * this._getStep();
  }

  _animatedMove(postion) {
    this._sliderContainer.style.transition = this.constructor.transitionStyle;
    this._sliderContainer.style.translate = `${this._getShift(postion)}%`;
  }

  _instantMove(position) {
    this._sliderContainer.style.removeProperty("transition");
    this._sliderContainer.style.translate = `${this._getShift(position)}%`;
  }

  _drawSlider() {
    this._disableButton(this._leftButton);
    this._disableButton(this._rightButton);
    this._animatedMove();

    setTimeout(() => {
      this._enableAllControls();
      this._calculateLabel();
      this._checkControls();
    }, this.constructor.transitionTimeout);
  }

  _leftCLick() {
    this._currentItem -= 1;
    this._drawSlider();
  }

  _rightClick() {
    this._currentItem += 1;
    this._drawSlider();
  }

  _disableAllControls() {
    this._disableControl(this._leftButton);
    this._disableControl(this._rightButton);
  }

  _enableAllControls() {
    this._enableControl(this._leftButton);
    this._enableControl(this._rightButton);
  }

  _disableButton(button) {
    button.disabled = true;
  }

  _disableControl(control) {
    control.disabled = true;
    control.classList.add('button_disabled');
  }

  _enableControl(control) {
    control.disabled = false;
    control.classList.remove('button_disabled');
  }
}

class InfiniteSlider extends Slider {
  constructor(params) {
    super(params);
  }

  initiate() {
    super._baseInitiate();
    this._prepareInfiniteSlider();
  }

  _prepareInfiniteSlider() {
    const sliderSelector = this._sliderContainer.querySelector(
      ".slider__item:last-of-type"
    );
    const item = sliderSelector.cloneNode(true);
    sliderSelector.remove();
    this._sliderContainer.prepend(item);
    this._instantMove(2);
  }

  _moveLeft() {
    const sliderSelector = this._sliderContainer.querySelector(
      ".slider__item:last-of-type"
    );
    const item = sliderSelector.cloneNode(true);
    this._disableButton(this._leftButton);
    this._disableButton(this._rightButton);
    this._animatedMove(1);
    setTimeout(() => {
      sliderSelector.remove();
      this._instantMove(2);
      this._sliderContainer.prepend(item);
      this._enableAllControls();
    }, super.constructor.transitionTimeout);
  }

  _moveRight() {
    const sliderSelector = this._sliderContainer.querySelector(
      ".slider__item:first-of-type"
    );
    const item = sliderSelector.cloneNode(true);
    this._disableButton(this._leftButton);
    this._disableButton(this._rightButton);
    this._animatedMove(3);
    setTimeout(() => {
      sliderSelector.remove();
      this._instantMove(2);
      this._sliderContainer.append(item);
      this._enableAllControls();
    }, super.constructor.transitionTimeout);
  }

  _leftCLick() {
    if (this._currentItem === 1) {
      this._currentItem = this._totalItem;
    } else {
      this._currentItem -= 1;
    }
    this._moveLeft();
    this._calculateLabel();
  }

  _rightClick() {
    if (this._currentItem === this._totalItem) {
      this._currentItem = 1;
    } else {
      this._currentItem += 1;
    }
    this._moveRight();
    this._calculateLabel();
  }
}

export { Slider, InfiniteSlider };
