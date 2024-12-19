var getIntersectionNode = function (headA, headB) {
	let hash = new Set();

	while (headA !== null) {
		hash.add(headA);
		headA = headA.next;
	}

	while (headB !== null) {
		if (hash.has(headB)) {
			return headB;
		}
		headB = headB.next;
	}
	return null;
};
