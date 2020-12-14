import React, { useCallback } from "react";
import TodoFunc from "./todo.func";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      extraArr: [],
      search: [],
      index: "",
      updatedInp: "",
      sametaskerr: "",
      checked:false,
      // -------------------------------------
      completedArr: [],
      completeextraArr: [],
      updatedInpCom: "",
      checkedCom:false
    };
  }

  changeHandler = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  submitClick = () => {
    if (!this.state.extraArr.includes(this.state.inputVal)) {
      this.setState({
        ...this.state,
        extraArr: [...this.state.extraArr, this.state.inputVal],
        search: [...this.state.search, this.state.inputVal],
        sametaskerr: "",
        inputVal: "",
      });
    } else {
      this.setState({
        ...this.state,
        sametaskerr: "Same Task present in the list",
      });
    }
  };

  searchHandler = (e) => {
    const searchArr = this.state.search.filter((user, idx) => {
      return user.includes(e.target.value);
    });
    if (e.target.value) {
      this.setState({
        ...this.state,
        search: searchArr,
      });
    } else {
      this.setState({
        ...this.state,
        search: this.state.extraArr,
      });
    }
  };

  editbutton = (idx) => {
    this.setState({
      ...this.state,
      index: idx,
    });
  };

  deletebutt = (idx) => {
    const idxval = this.state.extraArr.filter((user) => {
      return user !== this.state.extraArr[idx];
    });

    this.setState({
      ...this.state,
      extraArr: idxval,
      search: idxval,
    });
  };

  inputupdate = (e) => {
    this.setState({
      ...this.state,
      updatedInp: e.target.value,
    });
  };

  updatebutton = (idx) => {
    const arr1 = this.state.extraArr.slice(0, idx);
    const arr2 = this.state.extraArr.slice(idx + 1);

    this.setState({
      ...this.state,
      index: "",
      extraArr: [...arr1, this.state.updatedInp, ...arr2],
      search: [...arr1, this.state.updatedInp, ...arr2],
    });
  };

  checkbox = (e,idx) => {
    
    if (e===true){

    
    const idxval = this.state.extraArr.filter((user) => {
      return user !== this.state.extraArr[idx];
    });

    this.setState({
      ...this.state,
      completedArr: [...this.state.completedArr, this.state.extraArr[idx]],
      completeextraArr: [
        ...this.state.completeextraArr,
        this.state.extraArr[idx],
      ],
      extraArr: idxval,
      search: idxval,
      checked:false
      
    });
  }
    // this.call()
  };


  call=()=>{
    this.setState({
      ...this.state,
      checked:false
    })

  }

  // ---------------------------------------------------
  checkboxincom = (e,idx) => {
    if (e===true){
    const idxval = this.state.completeextraArr.filter((user) => {
      return user !== this.state.completeextraArr[idx];
    });

    this.setState({
      ...this.state,
      extraArr: [...this.state.extraArr, this.state.completeextraArr[idx]],
      search: [...this.state.search, this.state.completeextraArr[idx]],
      completedArr: idxval,
      completeextraArr: idxval,
      checkedCom:false
    });
  };
}

  inputupdatecom = (e) => {
    this.setState({
      ...this.state,
      updatedInpCom: e.target.value,
    });
  };

  editbuttCom = (idx) => {
    this.setState({
      ...this.state,
      indexcom: idx,
    });
  };

  updatebuttCom = (idx) => {
    const arr1 = this.state.completeextraArr.slice(0, idx);
    const arr2 = this.state.completeextraArr.slice(idx + 1);

    this.setState({
      ...this.state,
      indexcom: "",
      completeextraArr: [...arr1, this.state.updatedInpCom, ...arr2],
      completedArr: [...arr1, this.state.updatedInpCom, ...arr2],
    });
  };

  deletebuttCom = (idx) => {
    const idxval = this.state.completeextraArr.filter((user) => {
      return user !== this.state.completeextraArr[idx];
    });

    this.setState({
      ...this.state,
      completeextraArr: idxval,
      completedArr: idxval,
    });
  };

  searchCom = (e) => {
    const searchArr = this.state.completedArr.filter((user, idx) => {
      return user.includes(e.target.value);
    });
    if (e.target.value) {
      this.setState({
        ...this.state,
        completedArr: searchArr,
      });
    } else {
      this.setState({
        ...this.state,
        completedArr: this.state.completeextraArr,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <TodoFunc
          inputchange={this.changeHandler}
          add_task={this.submitClick}
          arrVal={this.state.search}
          search={this.searchHandler}
          editbutt={this.editbutton}
          deletebutt={this.deletebutt}
          extraAr={this.state.extraArr}
          index={this.state.index}
          updatebutt={this.updatebutton}
          inputupdate={this.inputupdate}
          sametaskerr={this.state.sametaskerr}
          inputVal={this.state.inputVal}
          checkbox={this.checkbox}
          checked={this.state.checked}
          // ------------------------------------------
          completedArr={this.state.completedArr}
          completeextraArr={this.state.completeextraArr}
          checkboxincom={this.checkboxincom}
          indexcom={this.state.indexcom}
          inputupdatecom={this.inputupdatecom}
          editbuttCom={this.editbuttCom}
          updatebuttCom={this.updatebuttCom}
          deletebuttCom={this.deletebuttCom}
          searchCom={this.searchCom}
          checkedCom={this.state.checkedCom}
        />
      </React.Fragment>
    );
  }
}

export default Todo;
