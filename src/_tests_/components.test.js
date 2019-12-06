import React from "react";
import Exif from "../components/Exif";
import Filepicker from "../components/Filepicker";
import FingerprintTable from "../components/FingerprintTable";
import Fingerprint from "../components/Fingerprint";
import Table from "../components/Table";
import Thumbnail from "../components/Thumbnail";
import renderer from "react-test-renderer";

describe("Component Rendering", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });

  it("Exif Component", () => {
    const ExifComponent = renderer.create(<Exif />).toJSON();
    expect(ExifComponent).toMatchSnapshot();
  });

  it("Filepicker Component", () => {
    const FilepickerComponent = renderer.create(<Filepicker />).toJSON();
    expect(FilepickerComponent).toMatchSnapshot();
  });

  it("Fingerprint Component", () => {
    const FingerprintComponent = renderer.create(<Fingerprint />).toJSON();
    expect(FingerprintComponent).toMatchSnapshot();
  });

  it("FingerprintTable Component", () => {
    const FingerprintTableComponent = renderer
      .create(<FingerprintTable />)
      .toJSON();
    expect(FingerprintTableComponent).toMatchSnapshot();
  });

  it("Table Component", () => {
    const TableComponent = renderer.create(<Table />).toJSON();
    expect(TableComponent).toMatchSnapshot();
  });

  it("Thumbnail Component", () => {
    const ThumbnailComponent = renderer.create(<Thumbnail />).toJSON();
    expect(ThumbnailComponent).toMatchSnapshot();
  });
});
