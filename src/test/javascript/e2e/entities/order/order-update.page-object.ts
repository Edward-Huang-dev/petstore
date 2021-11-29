import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class OrderUpdatePage {
  pageTitle: ElementFinder = element(by.id('petStoreApp.order.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  petIdInput: ElementFinder = element(by.css('input#order-petId'));
  quantityInput: ElementFinder = element(by.css('input#order-quantity'));
  shipDateInput: ElementFinder = element(by.css('input#order-shipDate'));
  statusSelect: ElementFinder = element(by.css('select#order-status'));
  completeInput: ElementFinder = element(by.css('input#order-complete'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setPetIdInput(petId) {
    await this.petIdInput.sendKeys(petId);
  }

  async getPetIdInput() {
    return this.petIdInput.getAttribute('value');
  }

  async setQuantityInput(quantity) {
    await this.quantityInput.sendKeys(quantity);
  }

  async getQuantityInput() {
    return this.quantityInput.getAttribute('value');
  }

  async setShipDateInput(shipDate) {
    await this.shipDateInput.sendKeys(shipDate);
  }

  async getShipDateInput() {
    return this.shipDateInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption() {
    await this.statusSelect.all(by.tagName('option')).last().click();
  }
  getCompleteInput() {
    return this.completeInput;
  }
  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setPetIdInput('5');
    expect(await this.getPetIdInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setQuantityInput('5');
    expect(await this.getQuantityInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setShipDateInput('shipDate');
    expect(await this.getShipDateInput()).to.match(/shipDate/);
    await waitUntilDisplayed(this.saveButton);
    await this.statusSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    const selectedComplete = await this.getCompleteInput().isSelected();
    if (selectedComplete) {
      await this.getCompleteInput().click();
      expect(await this.getCompleteInput().isSelected()).to.be.false;
    } else {
      await this.getCompleteInput().click();
      expect(await this.getCompleteInput().isSelected()).to.be.true;
    }
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
