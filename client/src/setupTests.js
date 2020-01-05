import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

/**
 * Helper module to configure Enzyme
 */
Enzyme.configure({ adapter: new EnzymeAdapter() });
