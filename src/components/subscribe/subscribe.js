import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useLanguage } from "src/contexts/language-context";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as ReactDOM from "react-dom";

export default function Subscribe() {
  const { renderLanguage } = useLanguage();

  const [scriptLoaded, setScriptLoaded] = useState(false);

  const addScript = () => {
    console.log("WINDOW PAYPAL 1:", window.paypal);
    if (window.paypal) {
      setScriptLoaded(true);

      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=AddTMEQiTJS5byu09qLlYlbTOXTU00MEx2OlBxEouVSXXaLL_dh6HHETRONde3u_TdQ1U1wqwNY6JVMG";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => setScriptLoaded(true);

    document.body.appendChild(script);

    console.log("PAYPAL BUTTONS:", PayPalButton);
  };

  useEffect(() => {
    addScript();
  }, []);

  const PayPalButton = window.paypal.Button.driver("react", {
    React,
    ReactDOM,
  });

  return (
    <Box
      sx={{
        padding: "64px 128px",
        backgroundColor: "#F0F5FE",
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
        "@media (max-width: 1000px)": {
          padding: "64px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "256px",
          "@media (max-width: 1224px)": {
            flexWrap: "wrap",
            gap: "16px",
          },
        }}
      >
        <Typography
          fontSize={22}
          fontWeight={700}
          sx={{ fontFeatureSettings: "'case' on" }}
        >
          {renderLanguage(
            `გამოიწერე სიახლეები ორგანიზაციის საქმიანობის შესახებ`,
            `Subscribe to news about the organization's activities`
          )}
        </Typography>
        {/* <PayPalButton
          payment={async (data, actions) => {
            console.log('DATA:', data)
          }}
          onAuthorize={async (data, actions) => {
            console.log('DATA:', data)
          }}
        /> */}
        <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
          <TextField
            fullWidth
            id="standard-basic"
            sx={{ "& label": { fontFeatureSettings: "'case' on" } }}
            label={renderLanguage(
              `თქვენი ელფოსტის მისამართი`,
              `Your email address`
            )}
            variant="standard"
          />
          <Button variant="contained">
            {renderLanguage(`გამოწერა`, `Subscribe`)}
          </Button>
        </Box>
      </Box>
      <PayPalHostedField
        id="cvv"
        hostedFieldType="cvv"
        options={{
          selector: "#cvv",
          placeholder: "123",
        }}
        className={styles.card_field}
      />
      {scriptLoaded && (
        <PayPalScriptProvider
          options={{
            "client-id":
              "AddTMEQiTJS5byu09qLlYlbTOXTU00MEx2OlBxEouVSXXaLL_dh6HHETRONde3u_TdQ1U1wqwNY6JVMG",
            currency: "USD",
            intent: "capture",
            components: "buttons",
          }}
        >
          <PayPalButtons
            style={{
              color: "gold",
              shape: "rect",
              label: "pay",
              height: 50,
            }}
            createOrder={async (data, actions) => {
              let order_id = await paypalCreateOrder();
              return order_id + "";
            }}
            onApprove={async (data, actions) => {
              let response = await paypalCaptureOrder(data.orderID);
              if (response) return true;
            }}
          />
        </PayPalScriptProvider>
      )}
      <Typography fontSize={16} fontWeight={200} sx={{ marginTop: "48px" }}>
        {renderLanguage(
          `თქვენი ელფოსტის მისამართის შეყვანით, თქვენ თანახმა ხართ მიიღოთ განახლებები ACT Georgia-ს შესახებ. მეტი ინფორმაციის მისაღებად, თუ როგორ ვიყენებთ და დავიცვათ თქვენი პერსონალური მონაცემები, გთხოვთ, იხილოთ ჩვენი კონფიდენციალურობის პოლიტიკა.`,
          `By entering your e-mail address, you agree to receive updates about the work of ACT Georgia. For more information on how we use and protect your personal data, please see our privacy policy.`
        )}
      </Typography>
    </Box>
  );
}
