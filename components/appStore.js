import create from "zustand";

export const useStore = create((set) => ({
	selectedMailbox: "Inbox",
	setSelectedMailbox: (e) => set({ selectedMailbox: e }),

	selectedCategory: "Primary",
	setSelectedCategory: (e) => set({ selectedCategory: e }),

	sendMessageIsOpen: false,
	setSendMessageIsOpen: () => set((state) => ({ sendMessageIsOpen: !state.sendMessageIsOpen })),

	selectedMail: null,
	setSelectedMail: (e) => set({ selectedMail: e }),

	user: null,
	setUser: (e) => set({ user: e }),
}));
