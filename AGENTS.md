<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- GSAP components that pin React-owned elements must revert in layout-effect cleanup before React removes them, and must not replace React-owned text nodes; this keeps client-side navigation safe.
- Photographic parallax uses a clipped viewport-fixed image layer shared by the home and image-bearing page headings, with a static reduced-motion fallback, to avoid scroll-time React updates.
- Accounts: roles live in public.user_roles (admin/client, new signups get client via trigger); /dashboard and /admin sit under the _authenticated gate so signed-out visitors go to /auth.
