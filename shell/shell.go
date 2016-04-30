package shell

import (
  "strings"
  "github.com/abiosoft/ishell"
)

func Start() {
  shell := ishell.New()

  shell.Println("Sample Interactive Shell")

  shell.Register("greet", func(args ...string) (string, error) {
    name := "Stranger"
    if len(args) > 0 {
      name = strings.Join(args, " ")
    }
    return "Hello " + name, nil
  })

  shell.Start()
}
