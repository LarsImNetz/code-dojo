package org.linuxx.moonserver.codedojo.diamond;

final class InnerIndent implements IIndent {
	private final IIndent indent;

	public InnerIndent() {
		indent = new Indent() {
			@Override
			public int faktorisieren(final int count) {
				return 2 * count - 1;
			}
		};
	}

	@Override
	public String getIndent(final int count) {
		return indent.getIndent(count);
	}
}
