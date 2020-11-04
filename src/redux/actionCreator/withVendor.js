import { connect } from "react-redux";
import { loginSuccess, vendorSet } from "../actions";


const mapDispatchToProps = dispatch => ({
    setIsVendor: state => {
        dispatch(vendorSet(state));
    }
});

const mapStateToProps = state => ({
    isVendor: state.vendor ? state.vendor : false
});
export default connect(mapStateToProps, mapDispatchToProps);
