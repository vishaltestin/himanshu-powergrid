/**
 * Renders admin-authored rich text (HTML from the Quill editor) with the
 * original hardcoded content as fallback, so the UI never changes until
 * content is actually edited.
 */
export function Rich({
    html,
    fallback,
    className,
}: {
    html?: string | null;
    fallback: string;
    className?: string;
}) {
    if (html) {
        return (
            <div
                className={`rich-text ${className ?? ''}`}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }
    return <div className={className}>{fallback}</div>;
}

/** Parse a repeater string "one per line" into a string array. */
export const lines = (value: unknown): string[] =>
    typeof value === 'string'
        ? value.split('\n').map((s) => s.trim()).filter(Boolean)
        : Array.isArray(value)
          ? value.map(String)
          : [];
