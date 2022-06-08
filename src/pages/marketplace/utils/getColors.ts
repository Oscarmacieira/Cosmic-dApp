export function getColor(value: any) {
	if (value === 1) return "#113D02";
	if (value === 2) return "#0E184C";
	if (value === 3) return "#401F92";
	if (value === 4) return "#E47C02";
	if (value === 5) return "#A60A00";
	else return "#abcdef";
}

export function getRarity(value: any) {
	if (value === 1) return "Normal";
	if (value === 2) return "Rare";
	if (value === 3) return "Epic";
	if (value === 4) return "Legendary";
	if (value === 5) return "Cosmic";
	else return "";
}

export function getStatIcon(value: any) {
	switch (value) {
		case "hp":
			return "svg/hearth.svg";
		default:
			return "svg/hearth.svg";
	}
}
