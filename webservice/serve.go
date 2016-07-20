package webservice

import (
        "encoding/json"
        "fmt"
	"log"
        "net/http"
        )

func handleSend(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Handling Send Request")
}

func handleList(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    messages := [3]string{"Test Message 1", "Test Message 2", "Test Message 3"}

    outgoingJSON, error := json.Marshal(messages)

    if error != nil {
        log.Println(error.Error())
        http.Error(w, error.Error(), http.StatusInternalServerError)
        return
    }

    fmt.Fprint(w, string(outgoingJSON))
}

func Serve() {
    http.HandleFunc("/send", handleSend)
    http.HandleFunc("/list", handleList)
    err := http.ListenAndServe(":9090", nil) // set listen port
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}

