import {render, screen} from "@testing-library/react";
import Options from '../Options.jsx'

test('displays image for each scoop from server', async () => {
    render(<Options optionType={'scoops'} />);

    // find the images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImages).toHaveLength(2);

    // confirm all text of images
    // const altText = scoopImages.map( e => e.alt);
    // expect(altText).toEqual(['Vanilla scoop', 'Chocolate scoop'])
})
