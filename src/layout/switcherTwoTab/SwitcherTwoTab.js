import SwitcherTwoTabHeader from '../../components/SwitcherHeader/SwitcherTwoTabHeader'
import { SwitcherTwoTabRouter } from '../../routes/SwitcherTwoTabRoter'

export function SwitcherTwoTab() {
    return (
        <div>
            <header>
                <SwitcherTwoTabHeader>История операций</SwitcherTwoTabHeader>  {/* для примера написал */}
            </header>
                <SwitcherTwoTabRouter/>
        </div>
    )
}