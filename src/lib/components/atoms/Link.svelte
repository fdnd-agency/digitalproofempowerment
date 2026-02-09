<script>

let {href="#", target="_self ", rel, text, className } = $props();

</script>

<!-- When using this component enter class name as className. -->

<a
href={href}
target= {target}
rel={rel}
class={className}
>
{text}
</a>

<style>

.footer-link{
color : white;
font-weight: 500;
text-decoration: none;
margin: 2rem;
padding: .5rem;
letter-spacing:  .03rem;
border: none;

}

.footer-link:visited{
    color: white;

}
.footer-link:hover{
    font-size: larger;
}


</style>
