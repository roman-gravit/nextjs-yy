/* eslint-disable react/no-children-prop */
import React from "react"

export const Films = () => {
	return React.createElement("div", {
		children: [
			React.createElement("span", { children: "1"}),
			React.createElement("span", { children: "2"})
		]
	});
}