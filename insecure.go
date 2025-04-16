package main

import (
	"crypto/tls"
	"net/http"
)

// reusable client that doesn't check tls
// obviously, don't just modify this
var InsecureClient http.Client = http.Client{Transport: &http.Transport{TLSClientConfig: &tls.Config{InsecureSkipVerify: true}}}
