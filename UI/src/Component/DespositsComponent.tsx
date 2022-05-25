import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./TitleComponent";
import { IOrderDetail } from "../Interfaces/IOrderDetail";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  paymentStyle: {
    color: "#3f51b5",
  },
});
interface IProps {
  orderData: Array<IOrderDetail>;
  selectedIndex: number;
}
const Deposits: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { orderData, selectedIndex } = props;
  return (
    <React.Fragment>
      <Title>
        <FormattedMessage id="LABEL_SALE_AMOUNT" />
      </Title>
      <Typography component="p" variant="h4">
        ${orderData[selectedIndex]?.Amount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {orderData[selectedIndex]?.Date}
      </Typography>
      <div>
        <span className={classes.paymentStyle}>
          <FormattedMessage id="LABEL_PAYMENT_METHOD" />{" "}
          {orderData[selectedIndex]?.PaymentMethod}
        </span>
      </div>
    </React.Fragment>
  );
};
export default Deposits;
