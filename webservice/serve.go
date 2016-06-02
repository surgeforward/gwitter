package webservice

import (
        "fmt"
        "log"
            "net/http"
        )

func handleSend(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Handling Send Request")
}

func handleList(w http.ResponseWriter, r *http.Request) {
    fmt.Println("Handling List Request")
}

func Serve() {
    http.HandleFunc("/send", handleSend)
    http.HandleFunc("/list", handleList)
    err := http.ListenAndServe(":9090", nil) // set listen port
    if err != nil {
        log.Fatal("ListenAndServe: ", err)
    }
}

