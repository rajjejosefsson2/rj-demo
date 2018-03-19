import * as React from "react";
import { render } from "react-dom";
import Modal from "./Modal";

type AppProps = {};

type AppState = {
  isLoading: boolean;
  isModalOpen: boolean;
};

class App extends React.Component<AppProps, AppState> {
  state = {
    isLoading: true,
    isModalOpen: false
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <div>Content Here</div>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
