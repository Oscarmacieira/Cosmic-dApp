

export type CheckTxnInputObject = { 
    hash: string,
    onHold: Function,
    onSuccess : Function,
    onRepeat: Function
}




export const checktxn = ({hash, onHold, onSuccess, onRepeat} : CheckTxnInputObject) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_getTransactionReceipt",
        params: [hash],
        id: 1,
      }),
    };
    onHold();
    fetch(String(process.env.REACT_APP_SPEEDY_NODE), requestOptions)
      .then((response: any) => response.json())
      .then((data) => {
        let res = data;
        if (res.result == null) {
            onRepeat();
            setTimeout(function () {
                checktxn({hash, onHold, onSuccess, onRepeat});
                console.log("Waiting for transaction hash...");
            }, 5000);
        } else {
          onSuccess();
        }
      });
  };
