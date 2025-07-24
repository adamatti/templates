package main

import "testing"
import "github.com/stretchr/testify/assert"

func TestSum(t *testing.T) {
	// when
	result := 1 + 1

	// then
	if result != 2 {
		t.Errorf("Sum didn't work")
	}

	// or
	assert.Equal(t, result, 2)
}
