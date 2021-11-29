import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class PhotoUrlUpdatePage {
  pageTitle: ElementFinder = element(by.id('petStoreApp.photoUrl.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  urlInput: ElementFinder = element(by.css('input#photo-url-url'));
  petsSelect: ElementFinder = element(by.css('select#photo-url-pets'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setUrlInput(url) {
    await this.urlInput.sendKeys(url);
  }

  async getUrlInput() {
    return this.urlInput.getAttribute('value');
  }

  async petsSelectLastOption() {
    await this.petsSelect.all(by.tagName('option')).last().click();
  }

  async petsSelectOption(option) {
    await this.petsSelect.sendKeys(option);
  }

  getPetsSelect() {
    return this.petsSelect;
  }

  async getPetsSelectedOption() {
    return this.petsSelect.element(by.css('option:checked')).getText();
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
    await this.setUrlInput('url');
    expect(await this.getUrlInput()).to.match(/url/);
    await this.petsSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
