export type CareerHistory = {
	Position?: string;
	"SBU/CSU"?: string;
	"Start Date"?: string;
	"End Date"?: string;
}[];

export type KeyAcheivements = {
	Title?: string;
	Type?: string;
	"Start Date"?: string;
	"End Date"?: string;
}[];

export type BusinessCompetency = { Competency?: string; Level?: string }[];

export type InfoSection = {
	[key: string]: {
		info?: string;
		data: {}[];
	};
};
