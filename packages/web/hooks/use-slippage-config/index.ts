import { useState } from "react";
import { Dec, DecUtils, RatePretty } from "@keplr-wallet/unit";
import { action, computed, makeObservable, observable } from "mobx";
import { computedFn } from "mobx-utils";

export class SlippageConfig {
  static readonly defaultSelectableSlippages: ReadonlyArray<Dec> = [
    // 1%
    new Dec("0.01"),
    // 3%
    new Dec("0.03"),
    // 5%
    new Dec("0.05"),
  ];

  @observable.shallow
  protected _selectableSlippages: ReadonlyArray<Dec> =
    SlippageConfig.defaultSelectableSlippages;

  @observable
  protected _selectedIndex: number = 0;

  @observable
  protected _isManualSlippage: boolean = false;

  @observable
  protected _manualSlippage: string = "2.5";

  constructor() {
    makeObservable(this);
  }

  @action
  setSelectableSlippages(slippages: ReadonlyArray<Dec>) {
    if (slippages.length === 0) {
      throw new Error("Slippages are empty");
    }

    this._selectableSlippages = slippages;

    if (this._selectableSlippages.length - 1 < this._selectedIndex) {
      this._selectedIndex = this._selectableSlippages.length - 1;
    }
  }

  @action
  select(index: number) {
    if (index < 0 || this._selectableSlippages.length - 1 < index) {
      return;
    }

    this._isManualSlippage = false;
    this._selectedIndex = index;
  }

  get isManualSlippage(): boolean {
    return this._isManualSlippage;
  }

  @action
  setIsManualSlippage(value: boolean) {
    this._isManualSlippage = value;
  }

  @action
  setManualSlippage(str: string) {
    this._isManualSlippage = true;
    this._manualSlippage = str;
  }

  @computed
  get manualSlippageStr(): string {
    return this._manualSlippage;
  }

  @computed
  get manualSlippage(): RatePretty {
    if (!this._isManualSlippage || this._manualSlippage === "") {
      return new RatePretty(new Dec(0));
    }

    try {
      return new RatePretty(
        new Dec(this._manualSlippage).quo(DecUtils.getTenExponentN(2))
      );
    } catch {
      return new RatePretty(new Dec(0));
    }
  }

  @computed
  get slippage(): RatePretty {
    if (this._isManualSlippage) {
      return this.manualSlippage;
    }

    return new RatePretty(this._selectableSlippages[this._selectedIndex]);
  }

  @computed
  get selectableSlippages(): {
    slippage: RatePretty;
    index: number;
    selected: boolean;
  }[] {
    return this._selectableSlippages.map((slippage, i) => {
      return {
        slippage: new RatePretty(slippage),
        index: i,
        selected: !this._isManualSlippage && i === this._selectedIndex,
      };
    });
  }

  getManualSlippageError = computedFn((): Error | undefined => {
    if (this._isManualSlippage) {
      try {
        new RatePretty(
          new Dec(this._manualSlippage).quo(DecUtils.getTenExponentN(2))
        );
      } catch {
        return new Error("Invalid slippage");
      }
    }

    return;
  });
}

// CONTRACT: Use with `observer`
export const useSlippageConfig = () => {
  const [config] = useState(() => new SlippageConfig());

  return config;
};